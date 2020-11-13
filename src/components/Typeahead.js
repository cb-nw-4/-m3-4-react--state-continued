import React, { useState } from 'react';

import styled from 'styled-components';

import App from './App';

const UserInput = styled.input` 
  margin: 20px 10px;;
  height: 35px;
  width: 300px;
  border: 1px solid lightgray;
  border-radius: 3px;
`

const Button = styled.button` 
  height: 35px;
  width: 70px;
  background-color: blue;
  border-radius: 3px;
  border: none;
  color: white;
  font-size: 16px;
`

const Typeahead = ({ suggestions, handleSelect }) => {
    const [value, setValue] = useState('');

    return (
        <div>
            <UserInput
            type='text'
            value={value}
            onChange={(ev) => setValue(ev.target.value)}
            onKeyDown={(ev) => {
                if (ev.key === 'Enter') {
                    handleSelect(ev.target.value);
                }
            }}
            />
            <Button onClick={() => setValue('')}>Clear</Button>
        </div>
    )
}

export default Typeahead;