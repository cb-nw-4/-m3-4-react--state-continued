import React from 'react';
import data from '../data';
import Typeahead from './Typeahead';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';

const Wrapper = styled.div`
  padding: 50px;
`;

const App = () => {
//console.log(data.books);
  return (
    <>
      <GlobalStyles />
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
