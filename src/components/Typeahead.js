import React, { useState } from 'react';
import styled from 'styled-components';

const Typeahead = ( { books, categories, handleSelect } ) => {
    const [ userInput, setUserInput ] = useState('');
    let bookTitles = books.filter((book) => book.title.includes(userInput));
    let suggestionList = bookTitles.map((book) => {
        let cutOff = book.title.indexOf(userInput);
        let predictionText = book.title.slice(cutOff);
        let second = predictionText.replace(userInput, "");
        let first = book.title.replace(second, "");
        let categoryArray = Object.entries(categories);
        book.genre = categoryArray.map((category) => {
            if (category[0] === book.categoryId) {
                return category[1]["name"];
            }    
        })
        return { first, second, title: book.title, genre: book.genre }
    })

    return (
        <Container>
            <Input
                type="text" 
                value={userInput}
                onChange={(event) => setUserInput(event.target.value)}
                onKeyDown={(event) => {
                    if (event.key === "Enter") {
                        handleSelect({userInput});
                    }
                }}/> 
            <Button onClick={() => setUserInput('')}>Clear</Button>
            <SuggestionContainer userInput={userInput}>
                {suggestionList.map((suggestion) => {
                    return (
                        <Suggestion
                            key={suggestion.id}
                            onClick={() => handleSelect(suggestion.title)}
                            >
                             <span>
                                {suggestion.first}
                                <Prediction>{suggestion.second}</Prediction>
                                <Category> in <CategoryId>{suggestion.genre}</CategoryId></Category>
                            </span> 
                        </Suggestion>
                    )
                })}
            </SuggestionContainer>
        </Container>
    )
            }
const Container = styled.div`
    position: absolute;
    top: 25%;
    left: 25%;
`;
const Input = styled.input`
    border-radius: 3px;
    border: 1px solid gray;
    padding: 5px;
    width: 300px;
    height: 25px;

    &:focus {
        outline: none;
    }
`;

const Button = styled.button`
    background-color: #0033cc;
    color: white;
    width: 50px;
    height: 25px;
    border-style: none;
    border-radius: 3px;
    padding: 5px;
    margin-left: 2px;
`;

const SuggestionContainer = styled.ul`
    display: ${(props) => (props.userInput === "" ? "none" : "block") };
    width: 340px;
    margin: 5px;
    box-shadow: 3px 3px 8px 10px #e0e0eb;
    border-radius: 3px;
`;

const Suggestion = styled.li`
    padding: 2px;
    margin: 5px;

    &:hover {
        background-color: #ffffcc;
    }
`;

const Prediction = styled.span`
    font-weight: bold;
`;

const Category = styled.span`
    font-style: italic;
`;

const CategoryId = styled.span`
    font-style: italic;
    color: #b84dff;
`;

export default Typeahead;

