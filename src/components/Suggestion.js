import React from "react"
import styled from "styled-components";
import data from "../data";


const ResultDiv = styled.ul`
    width:440px;
    border:none;
    border-radius:4px;
    box-shadow: 0 0 10px lightgray;
    padding: 15px;
    margin:0;
    position:absolute;
`;

const Suggestion = styled.li`
    font-size:16px;
    margin:10px;
    background-color: lightyellow;
`;


const SearchSuggestions = (props) => {

    let result = data.books.filter(book => book.title.toLowerCase().includes(props.value.toLowerCase()))
    console.log(result)
    return (
        <>
        {result.length > 0 && props.value.length >= 2 && (
            <ResultDiv>
            {(result.map((suggestion) => {
                return (
                    <Suggestion
                    key={suggestion.id}
                    // onClick={() => handleSelect(suggestion.title)}
                    >
                        {suggestion.title}
                    </Suggestion>
                        );
                })
            )
        }
            </ResultDiv>
        ) }
        
    </>   
    )
};

export default SearchSuggestions;