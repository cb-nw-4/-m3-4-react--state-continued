import React from 'react';
import styled from 'styled-components';

const Suggestion = ({suggestion, handleSelect,input,categories}) =>{

    let crossIndex = suggestion.title.toLowerCase().indexOf(input.toLowerCase())+input.length;
    let firstHalf=suggestion.title.slice(0,crossIndex);
    let secondHalf=suggestion.title.slice(crossIndex);

    let categoryName = Object.values(categories).find((cat)=>{
            return cat.id === suggestion.categoryId? true:false;
        }).name;

    return (
        <SuggestionItem onClick={()=>handleSelect(suggestion.title)} id={suggestion.id}>
            <span>
                {firstHalf}
                <Prediction>{secondHalf}</Prediction>
                <StyleIn> in </StyleIn>
                <BookGenre>{categoryName}</BookGenre>
            </span>
        </SuggestionItem>
    );
};

const SuggestionItem = styled.li`
    padding: 8px 8px;
    color: black;
    align-self: center;
    line-height: 1.2rem;

    &:hover{
        background-color:#FFFBE6;
        cursor: pointer;
    }
`
const Prediction = styled.span`
    font-weight: bold;
`
const StyleIn = styled.span`
    color: grey;
    font-style: italic;
    font-size: 0.9rem;
`
const BookGenre = styled.span`
    color: purple;
    font-style: italic;
    font-size: 0.9rem;
`
export default Suggestion;