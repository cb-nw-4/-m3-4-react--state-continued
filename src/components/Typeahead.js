import React, { useState } from "react";
import styled from 'styled-components';

const Input = styled.input`
  width: 250px;
  height: 40px;
  font-size: 1rem;
  border: 1px solid lightgray;
  border-radius: 5px;
  margin-right: 10px;

  &:focus {
    outline: none;
    border: 1px solid #2b00d7;
  }
`;

const Button = styled.button`
  height: 40px;
  width: 80px;
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  color: white;
  
  background-color: #2b00d7;
  cursor: pointer;
`;

const Typeahead = (props) => {
  const [userInput, setUserInput] = useState('');

  const handleClick = () => {
    setUserInput('');
  }

  const handleInput = (event) => {
    setUserInput(event.target.value)
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      props.handleSelect(event.target.value);
    }
  }

  return (
    <>
      <Input type="text" onKeyDown={handleKeyPress} onChange={handleInput} value={userInput}/>
      <Button onClick={handleClick}>Clear</Button>
    </>
  );
}

export default Typeahead;