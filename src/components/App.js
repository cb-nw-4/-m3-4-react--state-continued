import React from 'react';

import data from '../data';

import GlobalStyles from './GlobalStyles';

import styled from 'styled-components';

import Typeahead from './Typeahead';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const App = (props) => {

  return (
    <>
      <GlobalStyles />
      {/* TODO */}
      <Wrapper>
        <Typeahead
        suggestions={data.books}
        handleSelect={(suggestion) => {
          window.alert(suggestion);
        }}
        />
      </Wrapper>  
    </>
  );
};

export default App;
