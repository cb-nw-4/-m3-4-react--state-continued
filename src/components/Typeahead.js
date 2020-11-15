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
    const [selectedSuggestionIndex, setSelectedSuggestionIndex] = React.useState(0);

    const matchedSuggestions = suggestions.filter((suggestion)=>{
            const suggestiontitle = suggestion.title.toLowerCase();            
            return value.length > 1 && suggestiontitle.search(value.toLowerCase()) !== -1;
        }); 
 
    if (matchedSuggestions.length > 0 && selectedSuggestionIndex > matchedSuggestions.length -1)
        setSelectedSuggestionIndex(matchedSuggestions.length -1);
           
    return (
        <Wrapper>     
            <Input
                type="text"
                value= {value}
                onChange={(ev)=>(setValue(ev.target.value))}
                onKeyDown={(ev) => {
                    switch (ev.key) {
                        case "Enter": {
                            handleSelect(matchedSuggestions.length > 0 ? matchedSuggestions[selectedSuggestionIndex].title : ev.target.value);
                            return;
                        }
                        case "ArrowUp": {
                            if ( matchedSuggestions.length > 0 && selectedSuggestionIndex > 0)
                                setSelectedSuggestionIndex(selectedSuggestionIndex - 1);
                            break;
                        }
                        case "ArrowDown": {
                            if (matchedSuggestions.length > 0 && selectedSuggestionIndex < matchedSuggestions.length - 1)
                                setSelectedSuggestionIndex(selectedSuggestionIndex + 1);
                            break;
                        }
                        default:
                            break;
                }}}
            />
            <Button onClick={()=>{ setValue("")}}>Clear</Button> 
            { matchedSuggestions.length > 0 &&      
            <List>
                {matchedSuggestions.map((suggestion, index)=>{       
                    const jonctionIndex = suggestion.title.toLowerCase().indexOf(value.toLowerCase()) + value.length;
                    const firstHalf = suggestion.title.slice(0, jonctionIndex);
                    const secondHalf = suggestion.title.slice(jonctionIndex);
                    const isSelected = selectedSuggestionIndex === index;
                    return (
                        <li 
                            key={suggestion.id} 
                            onClick={()=>(handleSelect(suggestion.title))}
                            onMouseEnter={()=>(setSelectedSuggestionIndex(index))}
                            style={{
                                background: isSelected ? 'hsla(50deg, 100%, 80%, 0.25)' : 'transparent',
                            }}
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
