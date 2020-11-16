import React, { useState } from 'react';
import data from '../data';
import GlobalStyles from './GlobalStyles';
import Typeahead from './Typeahead';
import Matches from './Matches';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const App = (props) => {
  const [userInput, setUserInput] = useState('');

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Typeahead
          handleSelect={(suggestion) => {
            window.alert(suggestion)
          }}
          userInput={userInput}
          setUserInput={setUserInput}
        />
        <Matches
          suggestions={data.books}
          userInput={userInput}
          handleSelect={(event) => {
            window.alert(event.target.innerHTML)
          }}
        />
      </Wrapper>
    </>
  );
};

export default App;
