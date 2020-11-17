import React from 'react';

import styled from 'styled-components';

const SuggestionsContainer = styled.ul`
    width: 315px;
    list-style: none;
    box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.2);
    border-radius: 5px;
    padding: 10px;
`;

const SuggestedBookTitle = styled.li`
    padding: 10px;
    font-size: 15px;

    &:hover {
        background-color: lightyellow;
    }
`;

const Prediction = styled.span`
    font-weight: bold;
`;

const Category = styled.span`
    color: purple;
`;

const Suggestion = ({ filteredSuggestions, categories , searchBook, handleSelect, selectedSuggestionIndex, setSelectedSuggestionIndex }) => {
    if (searchBook.length >= 2) {
        if (filteredSuggestions.length > 0) {
            return <SuggestionsContainer>{filteredSuggestions.map((filteredSuggestion) => {
                const crossOverPoint = filteredSuggestion.title.toLowerCase().search(searchBook.toLowerCase());
                const isSelected = filteredSuggestions.find((filteredSuggestion) => {
                    return filteredSuggestions.indexOf(filteredSuggestion) === selectedSuggestionIndex;
                })
                return (
                    <SuggestedBookTitle
                        key = {filteredSuggestion.id}
                        onClick = {() => handleSelect(filteredSuggestion.title)}
                        onMouseEnter = {() => {setSelectedSuggestionIndex(filteredSuggestions.indexOf(filteredSuggestion))}}
                        style = {{background: filteredSuggestion === isSelected ? 'hsla(50deg, 100%, 80%, 0.25)' : 'transparent'}}
                    >
                        <span>{filteredSuggestion.title.slice(0, crossOverPoint + searchBook.length)}</span>
                        <Prediction>{filteredSuggestion.title.slice(crossOverPoint + searchBook.length)}</Prediction>
                        <span><i> in <Category>{categories[filteredSuggestion.categoryId].name}</Category></i></span>
                    </SuggestedBookTitle>
                );
            })}</SuggestionsContainer>
        }
        else {
            return null;
        }
    }
    else {
        return null;
    }     
}

export default Suggestion;