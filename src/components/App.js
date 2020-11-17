import React, { useState } from "react";
import GlobalStyles from "./GlobalStyles";
import data from "../data";
import styled from "styled-components";
import { Typeahead } from "./Typeahead";

const App = (props) => {
  return (
    <>
      <GlobalStyles />

      <Typeahead
        suggestions={data.books}
        category={data.categories}
        handleSelect={(suggestion) => {
          window.alert(suggestion);
        }}
      />
    </>
  );
};

export default App;

// 