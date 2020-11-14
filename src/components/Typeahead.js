import React, { useState } from "react";
import styled from "styled-components";



const SearchBar = styled.input`
width:350px;
height:40px;
margin:10px;
font-size:16px;
border:2px solid lightgray;
border-radius: 4px;
`;

const SearchButton = styled.button`
width:80px;
height:40px;
font-size:16px;
color:white;
background-color:#4008c2;
border-radius: 4px;
border-style:none;
`;



const Typeahead = ({suggestions, handleSelect}) => {
    const [value, setValue] = useState("");
    return (
        <div>
    <SearchBar
    type = "text"
    value = {value}
    onChange = {(ev) => setValue(ev.target.value) } 
    onKeyDown = {(ev) => {
        if (ev.key === "Enter") {
            handleSelect(ev.target.value)
        }
    }}
    />
    <SearchButton onClick = {() => setValue("")}>Clear</SearchButton>
    </div>
);
};


export default Typeahead;