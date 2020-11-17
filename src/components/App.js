import React from 'react';
import Typeahead from './Typeahead.js';
import GlobalStyles from './GlobalStyles';

import data from '../data.js';

const App = (props) => {
  return (
    <>
      <GlobalStyles />
        <Typeahead 
          books={data.books}
          categories={data.categories}
          handleSelect={(props) => window.alert(props)}
        >
        </Typeahead>
    </>
  );
};

export default App;
