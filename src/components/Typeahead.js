import React, { useState } from "react";
import styled from "styled-components";
import SearchSuggestions from "./Suggestion";




const SearchBar = styled.input`
    width: 350px;
    height: 40px;
    margin: 10px;
    font-size: 16px;
    border: 2px solid lightgray;
    border-radius: 4px;
    & :focus {
        border:2px solid #4008c2;
        box-shadow: 0 0 10px #4008c2; 
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

const ResultDiv = styled.ul`
    width:440px;
    border:none;
    border-radius:4px;
    box-shadow: 0 0 10px lightgray;
    padding: 15px;
    margin:0;
    display:none;
`;



const Typeahead = ( suggestions, handleSelect ) => {
    const [value, setValue] = useState("");
    return (
    <div>
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
        <SearchButton onClick={() => setValue("")}>Clear</SearchButton>
        <ResultDiv>
        <SearchSuggestions
        value={value}
        searchSuggestion={suggestions}
        />
        </ResultDiv>

        
    </div>
    );
};

export default Typeahead;
