import React from 'react';
import Typehead from './Typehead';
import GlobalStyles from './GlobalStyles';
import data from '../data'
import styled from 'styled-components';

const App = (props) => {
  return (
    <Wrapper>
      <GlobalStyles />
      {/* TODO */}
      <Typehead suggestions={data.books}
                handleSelect={(suggestion) => {
                window.alert(suggestion)
      }}/>
    </Wrapper>
  );
};

const Wrapper=styled.div`
  display:flex;
  justify-content:center;
  height:100vh;
  width:100vw;
  //align-items: center;
`;

export default App;
