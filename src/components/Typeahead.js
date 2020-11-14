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
        
        <SearchSuggestions
        value={value}
        searchSuggestion={suggestions}
        />
        

        
    </div>
    );
};

export default Typeahead;
