import React from "react";
import Typehead from "../typehead";

import styled from "styled-components";

import GlobalStyles from "./GlobalStyles";
import data from "../data";

const handleSelect = (suggestion) => {
  window.alert(suggestion);
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 200px;
`;

const App = (props) => {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;1,100;1,300&display=swap');
      </style>
      <GlobalStyles />
      <Wrapper>
        <Typehead data={data} handleSelect={handleSelect} />
      </Wrapper>
    </>
  );
};

export default App;
