import React from 'react';
import data from '../data';
import GlobalStyles from './GlobalStyles';
import Typeahead from './Typeahead';
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
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Typeahead
          suggestions={data.books}
          categories={data.categories}
          handleSelect={(suggestion) => {
            window.alert(suggestion)
          }}
        />
      </Wrapper>
    </>
  );
};

export default App;
