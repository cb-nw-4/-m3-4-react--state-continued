import React from 'react';
import styled from "styled-components";
import data from '../data';
import GlobalStyles from './GlobalStyles';
import Typeahead from './Typeahead';


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

`;

const App = (props) => {
  return (
    <>
      <GlobalStyles />
      {/* TODO */}
      <Wrapper>
      <Typeahead 
        suggestions={data.books}
        handleSelect={(suggestion) => {window.alert(suggestion)}}
      />
      </Wrapper>
    </>
  );
};

export default App;
