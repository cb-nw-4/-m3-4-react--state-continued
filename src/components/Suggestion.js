import React from 'react';
import styled from 'styled-components';

const Suggestion = ({suggestion, handleSelect}) =>{
    return (
        <SuggestionItem onClick={()=>handleSelect(suggestion.title)}>{suggestion.title}</SuggestionItem>
    );
};

const SuggestionItem = styled.li`
    padding: 8px 6px;
    color: black;
    align-self: center;
    line-height: 1.2rem;

    &:hover{
        background-color:#FFFBE6;
        cursor: pointer;
    }
`

export default Suggestion;