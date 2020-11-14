import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    justify-content: flex-start;
    align-items: center;
    padding-top: 20px;

    & div{
        width: 25%;
    }
    & input{
        width: 81%;
        height: 30px;
    }
    & button{
        width: 18%;
        height: 30px;
        margin-left: 1%;
        color: white;
        background-color: #4430DB;
        border: none;
        outline: none;
        border-radius: 5px;
    }

    & ul{
        margin-top: 10px;
        box-shadow: 0 0 2px;
    }
`;

const Suggestion = styled.li`
    width: 19vw;
    padding: 10px;

    /* &:hover{
        background-color: #FFFBE6;
    } */

    & span {
        font-weight: bold;
    }

    & .category{
        color: purple;
        font-size: 0.8em;
        font-style: italic;
    }
`;


const Typehead = ({ suggestions, handleSelect, categories }) => {
    const [value, setValue] = React.useState('');
    const [suggestionIndex, setSuggestionIndex] = React.useState(0);
    const matchedSuggestions = (value.length > 1 ? suggestions.filter((suggestion) => suggestion.title.toLowerCase().includes(value.toLowerCase())) : [])

    return(
        <Wrapper>
        <div>
            <input
            type='text'
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={(event) => {
                switch(event.key){
                    case "Enter": {
                        handleSelect(event.target.value);
                        return;
                    }
                    case "ArrowUp": {
                        if(suggestionIndex > 0) {
                            setSuggestionIndex(suggestionIndex - 1);
                        } 
                            return;
                    }
                    case "ArrowDown": {
                        if(matchedSuggestions.length - 1 > suggestionIndex)
                        setSuggestionIndex(suggestionIndex + 1);
                    }
                    return;
                }
            }}
        />
        <button onClick={() => setValue('')}>Clear</button>
        </div>
        <ul>
            {matchedSuggestions.map((suggestion, i) => {
                const slicedIndex = suggestion.title.toLowerCase().indexOf(value.toLowerCase());
                const firstPart = suggestion.title.slice(0, slicedIndex + value.length);
                const secondPart = suggestion.title.slice(slicedIndex + value.length);
                const isSelected = (matchedSuggestions.indexOf(suggestion) === suggestionIndex ? true : false);

                return (
                    <Suggestion
                        key={suggestion.id}
                        onClick={() => handleSelect(suggestion.title)}
                        style={{
                            background: isSelected ? 'hsla(50deg, 100%, 80%, 0.25)' : 'transparent'
                        }}
                        onMouseEnter={() => {
                            setSuggestionIndex(i);
                        }}
                    >
                        {firstPart} <span>{secondPart}</span> <span className='category'>in {categories[suggestion.categoryId].name}</span>
                    </Suggestion>
                )
            })}
        </ul>
        </Wrapper>
    )
};

export default Typehead;