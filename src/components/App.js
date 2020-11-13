import React from 'react';

import GlobalStyles from './GlobalStyles';
import data from '../data';
import Typehead from './Typehead';

const App = (props) => {
  return (
    <>
      <GlobalStyles />
      {/* TODO */}
      <Typehead 
        suggestions={data.books}
        handleSelect={(suggestion)=>{window.alert(suggestion)}}
      />
    </>
  );
};

export default App;
