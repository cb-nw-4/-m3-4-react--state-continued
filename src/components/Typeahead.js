import React, { useState } from 'react';

import styled from 'styled-components';

import App from './App';

Exerconst Container = styled.div`
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
    &:hover {
        box-shadow: 2px 2px 8px 8px lightgrey;
        border-radius: 5px;
        padding: 10px;
    }
`

const Typeahead = ({ suggestions, handleSelect }) => {
    const [value, setValue] = useState('');
    const [matchedSuggestions, setMatchedSuggestions] = useState([]);   

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
                    if (ev.key === 'Enter') {
                        handleSelect(ev.target.value);
                    }
                }}
                />
                <Button onClick={() => setValue('')}>Clear</Button>
            </div>
            <SuggestionContainer>
                {matchedSuggestions.map((suggestion) => {
                    return (
                        <Suggestion
                            key={suggestion.id}
                            onClick={() => handleSelect(suggestion.title)}
                        >
                            {suggestion.title}
                        </Suggestion>
                    );
                })}
            </SuggestionContainer>
            
        </Container>
    )
}

export default Typeahead;