import React from 'react';
import data from '../data';
import GlobalStyles from './GlobalStyles';
import Typeahead from './Typeahead';

const App = (props) => {
  let handleSelect = (value)=> {
      window.alert(value);
    };  
  // console.log(props,"App props"); /* No Props here, empty */ 
  return (
    <>
      <GlobalStyles />
      <Typeahead
        suggestions={data.books}
        handleSelect={handleSelect}
      />
    </>
  );
};

export default App;
