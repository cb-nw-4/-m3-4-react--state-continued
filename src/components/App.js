import React from 'react';
import data from "../data";
import GlobalStyles from './GlobalStyles';
import Typeahead from './Typeahead';
import styled from "styled-components";


const Container = styled.div`
width:450px;
height:700px;
display: flex;
justify-content:center;
align-items:center;
margin:auto;
`;



const App = (props) => {
  return (
    <Container>
      <GlobalStyles />
      <Typeahead
      categories={data.categories}
      suggestions={data.books}
      handleSelect={(suggestion) => {
        window.alert(suggestion)
    }}/>
      </Container>
    
  );
};

export default App;
