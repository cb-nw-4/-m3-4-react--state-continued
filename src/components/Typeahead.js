import React, { useState } from 'react';
import styled from 'styled-components';
import Suggestion from './Suggestion';

const Input = styled.input`
  border: 2px solid darkgray;
  outline: darkgray;
  border-radius: 5px;
  width: 30%;
  height: 40px;
  padding: 5px;

  &:focus {
        border: 2px solid blue;
    }
`;

const Button = styled.button`
    background: #2B00D7;
    color: white;
    padding: 10px 25px;
    border-radius: 5px;
    border: none;
    outline: none;
    margin-left: 5px;
    height: 40px;
`;

const List = styled.ul`
    border: 2px solid #EDEDEC;
    border-radius: 5px;
    box-shadow: 1px 2px 4px 2px #EDEDEC;
    width: 37%;
`;

const Typeahead = ({suggestions, handleSelect}) => {
    //console.log(suggestions);
    const [value, setValue] = useState("");
    const [showList, setShowList] = useState(false);

    const filteredSuggestions = suggestions.filter(suggestion => {
        return suggestion.title.toLowerCase().includes(value.toLowerCase())
    })
    console.log(filteredSuggestions);

    return (
        <>
        <>
        <Input 
            type="text"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={(event) => {
                if (event.target.value.length >= 1 ) {setShowList(true)}
                if (event.target.value.length < 1 || filteredSuggestions.length === 0 ) {setShowList(false)}
                console.log(showList);
                console.log(event.target.value.length);
                /*if (event.key === 'Enter') {
                handleSelect(event.target.value);*/
            }}
        />
        <Button onClick={() => setValue("")}>Clear</Button>
        </>   
        {showList === true &&
            (<List>
                {filteredSuggestions.map(suggestion => {
                    return ( 
                        <>
                            <Suggestion suggestion={suggestion} handleSelect={handleSelect} value={value}/>
                        </>
                    )
                })}
               
            </List>)}
        
        </>
    )
}


export default Typeahead;