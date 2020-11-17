import React from 'react';

import data from '../data';

import GlobalStyles from './GlobalStyles';

import Typeahead from './Typeahead';

const App = (props) => {

  
  return (
    <>
      <GlobalStyles />
            {/* TODO */}
      <Typeahead
      categories={data.categories}
      suggestions={data.books}
      handleSelect={(suggestion) => {
        window.alert(suggestion) }}
        />
    </>
  );
};

export default App;
