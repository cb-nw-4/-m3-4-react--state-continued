import React from 'react';
import styled from 'styled-components';

// further down:
const Suggest = styled.li`
  padding: 5px;
  margin: 5px;
  font-size: 18px;

  &:hover {
    background: #FFFBE6;
  }

  & p {
    font-style: italic;
    color: purple;
    padding: 10px 0;
    font-size: 15px;
  }
`;

const Prediction = styled.span`
  font-weight: bold;
`;

const Suggestion = ({suggestion, handleSelect, value}) => {
  let indexIn = suggestion.title.toLowerCase().indexOf(value.toLowerCase());
  //console.log(indexIn, "indexIn");
 
  let sliced = suggestion.title.slice(indexIn + value.length);

    return (
    <Suggest key={suggestion.id} onClick={() => handleSelect(suggestion.title)}>
       <span>{suggestion.title.replace(sliced, "")}<Prediction>{sliced}</Prediction></span>  <p>{suggestion.categoryId.charAt(0).toUpperCase() + suggestion.categoryId.slice(1)}</p>
    </Suggest>
    )
}

export default Suggestion;