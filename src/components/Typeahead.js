import React, { useState } from "react";
import Matches from './Matches';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: inline;
`;

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
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  color: white;
  background-color: #2b00d7;
  cursor: pointer;
`;

const Typeahead = (props) => {
  const [userInput, setUserInput] = useState('');
  const [selectionIndex, setSelectionIndex] = useState(0);
  let bookTitle = '';
  let numMatches = 0;

  const handleClearClick = () => {
    setUserInput('');
    setSelectionIndex(0);
  }

  const handleInput = (event) => {
    setUserInput(event.target.value)
  }

  const handleKeyPress = (event) => {
    const currentIndex = selectionIndex;

    switch (event.key) { 
      case 'Enter':
        props.handleSelect(bookTitle);
        break;
      case 'ArrowDown':
        if (currentIndex < numMatches) {
          setSelectionIndex(currentIndex + 1);
        }

        break;
      case 'ArrowUp':
        if (currentIndex > 0) {
          setSelectionIndex(currentIndex - 1);
        }
        
        break;
    }
  }

  const handleMouseEnter = (event) => {
    setSelectionIndex(Number(event.target.id));
  }

  const passTitle = (title) => {
    bookTitle = title;
  }

  const passNumMatches = (matches) => {
    numMatches = matches;
  }

  return (
    <InputContainer>
      <Input type="text" onKeyDown={handleKeyPress} onChange={handleInput} value={userInput}/>
      <Button onClick={handleClearClick}>Clear</Button>
      <Matches
          suggestions={props.suggestions}
          categories={props.categories}
          userInput={userInput}
          handleSelect={(title) => {
            props.handleSelect(title);
          }}
          selectionIndex={selectionIndex}
          handleMouseEnter={handleMouseEnter}
          passTitle={passTitle}
          passNumMatches={passNumMatches}
        />
    </InputContainer>
  );
}

export default Typeahead;
