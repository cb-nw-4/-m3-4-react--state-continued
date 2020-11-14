import React, { useState } from 'react';
import styledComponentsCjs from 'styled-components';
import styled from "styled-components";

const Button = styled.button`
    padding: 10px 20px;
    color: white;
    background-color: #2637D2;
    border: none;
    margin-left: 15px;
    border-radius: 5px;
`;

const Input = styled.input`
    height: 35px;
    width: 250px;
    border: solid 1px lightgray;
`;

const Typeahead = ({suggestions, handleSelect})=> {
    const [value, setValue] = useState("");
    
    return (
    <>
        <Input
            type="text"
            value= {value}
            onChange={(ev)=>(setValue(ev.target.value))}
            onKeyDown={(ev) => {
                if (ev.key === 'Enter') {
                    handleSelect(ev.target.value);
            }
            }}
        />
        <Button onClick={()=>(setValue(""))}>Clear</Button>
     </>
 );
};

export default Typeahead;
