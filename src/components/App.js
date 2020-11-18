import React from 'react';

import GlobalStyles from './GlobalStyles';
import data, { categories } from '../data';
import Typehead from './Typehead';

const App = () => {
  return (
    <>
      <GlobalStyles />
      {/* TODO */}
      <Typehead 
        suggestions={data.books}
        handleSelect={(suggestion)=>{window.alert(suggestion)}}
        categories={categories}
      />
    </>
  );
};

export default App;
