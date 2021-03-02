import React, { useState } from "react";
import styled from "styled-components";
import SearchSuggestions from "./Suggestion";




const SearchBar = styled.input`
    width: 350px;
    height: 40px;
    margin: 10px;
    font-size: 16px;
    border: 1px solid lightgray;
    border-radius: 4px;
    & :focus {
        outline: red!important;
        /* box-shadow: 0 0 10px #4008c2;  */
    }
    
`;

const SearchButton = styled.button`
    width: 80px;
    height: 40px;
    font-size: 16px;
    color: white;
    background-color: #4008c2;
    border-radius: 4px;
    border-style: none;
`;

const List = styled.ul`
    position: absolute;
    top: 45px;    
    width: 100%;
    box-shadow: 1px 3px 7px 3px #D3D3D3;
    margin-bottom: 20px;   
    
    li {
        padding: 10px;
        cursor: pointer;         
    }
    li:hover {
        background-color: Cornsilk;
    }
`;

const Prediction = styled.span`
    font-weight: bold;
`;

// const Category = styled.span`   
//     font-size: 14px;
//     font-style: italic;   
//     span {
//         color: purple;
//     }
// `;

const Wrapper = styled.div`
    position: relative;
`;


const Typeahead = ( {suggestions, handleSelect} ) => {
    const [value, setValue] = useState("");
    
    const filterSuggestion = suggestions.filter((suggestion)=>{
        const title =  suggestion.title.toLowerCase();
        return value.length > 1 && title.search(value.toLowerCase()) !== -1;
    })
    return (
    <Wrapper>
        <SearchBar
        type="text"
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
        onKeyDown={(ev) => {
            if (ev.key === "Enter") {
            handleSelect(ev.target.value);
            }
        }}
        />
        <SearchButton onClick={() => (setValue(""))}>Clear</SearchButton>
            {filterSuggestion.length > 0 &&
                <List>
                    {filterSuggestion.map((suggestion)=>{
                        const jonctionIndex = suggestion.title.toLowerCase().indexOf(value.toLowerCase()) + value.length;
                        const firstHalf = suggestion.title.slice(0, jonctionIndex);
                        const secondHalf = suggestion.title.slice(jonctionIndex);
                            return (
                                <li 
                                    key={suggestion.id} 
                                    onClick={(ev)=>(handleSelect(suggestion.title))}
                                >
                                    <span>
                                        {firstHalf}
                                        <Prediction>{secondHalf}</Prediction>
                                    </span>
                                </li>
                            );
                        })}
                </List>}
    </Wrapper>
    );
};

export default Typeahead;
