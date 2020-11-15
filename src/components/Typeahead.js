import React, { useState } from 'react';
import styled from "styled-components";
import { categories } from '../data';

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
    width: 295px;
    padding: 5px;
    border: solid 1px lightgray;
`;
const List = styled.ul`
    position: absolute;
    top: 45px;    
    width: 100%;    
    box-shadow: 1px 3px 7px 3px #D3D3D3;
    margin-bottom: 20px;   
    line-height: normal;
   
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

const Prediction = styled.span`
    font-weight: bold;
`;

const Category = styled.span`   
    font-size: 14px;
    font-style: italic;   

    span {
        color: purple;
    }
`;
const Typeahead = ({suggestions, handleSelect})=> {
    const [value, setValue] = useState("");   

    const matchedSuggestions = suggestions.filter((suggestion)=>{
            const suggestiontitle = suggestion.title.toLowerCase();            
            return value.length > 1 && suggestiontitle.search(value.toLowerCase()) !== -1;
        });      
       
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
           { matchedSuggestions.length > 0 &&      
            <List>
                {matchedSuggestions.map((suggestion)=>{       
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
                                <Category> in <span>{categories[suggestion.categoryId].name}</span></Category>
                            </span>                            
                        </li>
                    );
                })}
            </List>}       
        </Wrapper>
    );
};

export default Typeahead;
