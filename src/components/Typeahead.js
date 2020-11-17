import React, { useState } from 'react';

import styled from 'styled-components';

import data from '../data';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const UserInput = styled.input` 
  margin: 20px 10px;;
  height: 35px;
  width: 300px;
  border: 1px solid lightgray;
  border-radius: 3px;
`

const Button = styled.button` 
  height: 35px;
  width: 70px;
  background-color: blue;
  border-radius: 3px;
  border: none;
  color: white;
  font-size: 16px;
`

const Suggestion = styled.li` 
 list-style-type: disc;
 margin-left: 5%;
 padding: 5px;

 &:hover {
    background-color: lightyellow;
 }
`

const SuggestionContainer = styled.ul` 
    box-shadow: 2px 2px 8px 8px lightgrey;
    border-radius: 5px;
    padding: 10px;
`

const Prediction = styled.span`
  font-weight: bold;
`

const Genre = styled.span` 
    color: purple;
    font-style: italic;
`

const Typeahead = ({ suggestions, handleSelect }) => {
    const [value, setValue] = useState('');
    const [matchedSuggestions, setMatchedSuggestions] = useState([]);
    const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(0);

    const getMatches = (suggestions, newValue) => {
        if (newValue.length > 1) {
            return suggestions.filter(suggestion => suggestion.title.toLowerCase().includes(newValue.toLowerCase()));
        } 
        return [];
    }
    

    return (
        <Container>
            <div>
                <UserInput
                type='text'
                value={value}
                onChange={(ev) => {
                    const newValue = ev.target.value;
                    setValue(newValue);
                    setMatchedSuggestions(getMatches(suggestions, newValue));
                }}
                onKeyDown={(ev) => {
                    switch(ev.key) {
                        case "Enter": {
                            handleSelect(matchedSuggestions[selectedSuggestionIndex].title);
                            return;
                        }
                        case "ArrowUp": {
                            setSelectedSuggestionIndex(selectedSuggestionIndex -1);
                            return;
                        }
                        case "ArrowDown": {
                            setSelectedSuggestionIndex(selectedSuggestionIndex + 1);
                        }
                    }
                }}
                />
                <Button onClick={() => setValue('')}>Clear</Button>
            </div>
            {matchedSuggestions.length > 0 &&
            <SuggestionContainer>
                {matchedSuggestions.map((suggestion, i) => {
                    let index = suggestion.title.toLowerCase().indexOf(value.toLowerCase());
                    let firstHalf = suggestion.title.slice(0, (index + value.length));
                    let secondHalf = suggestion.title.slice(index + value.length);
                    let categories = data.categories; 
                    const isSelected = selectedSuggestionIndex === i;
                    console.log(suggestion.title);
                    return (
                        <Suggestion
                            key={suggestion.id}
                            onClick={() => handleSelect(suggestion.title)}
                            onMouseEnter={() => setSelectedSuggestionIndex(i)}
                            style={{ background: isSelected ? 'hsla(50deg, 100%, 80%, 0.25)' : 'transparent', }}
                        >
                            <span>
                                {firstHalf}
                                <Prediction>{secondHalf}</Prediction>
                                <em> in </em>
                                <Genre>{categories[suggestion.categoryId].name}</Genre>
                            </span>          
                        </Suggestion>
                    );
                })}
            </SuggestionContainer> 
            }  
        </Container>
    )
}

export default Typeahead;
