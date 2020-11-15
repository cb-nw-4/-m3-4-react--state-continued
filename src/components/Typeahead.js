import React, { useState } from 'react';
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
    width: 290px;
    border: solid 1px lightgray;
`;
const List = styled.ul`
    position: absolute;
    top: 45px;    
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

const Wrapper = styled.div`
    position: relative;
`;

const Typeahead = ({suggestions, handleSelect})=> {
    const [value, setValue] = useState("");

    const matchedSuggestion = ()=>{
        return suggestions.filter((book)=>{
            const booktitle = book.title.toLowerCase();            
            return value.length > 1 && booktitle.search(value.toLowerCase()) !== -1;
        });       
    };
    
    return (
        <Wrapper>     
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
            <List>
                {matchedSuggestion().map((book)=>{               
                    return (
                        <li key={book.id}>{book.title}</li>
                    );
                })}
            </List>       
        </Wrapper>
    );
};

export default Typeahead;
