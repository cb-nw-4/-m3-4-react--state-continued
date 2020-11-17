import React from "react";
import styled from "styled-components"; 



const Suggestions = (props) => { 
  const { onClick, suggestion, category, searchTerm, isSelected } = props;
  const lowerCasedSuggestion = suggestion.toLowerCase();
  const matchIndex = lowerCasedSuggestion.indexOf(searchTerm);
  const matchEnd = matchIndex + searchTerm.length;

  const firstHalf = suggestion.slice(0, matchEnd);
  const secondHalf = suggestion.slice(matchEnd);
  // console.log({matchIndex, matchEnd});

  return (
    <Wrapper isSelected = {isSelected} onClick={onClick}>
      <span>
        {firstHalf}
        <Predictions>{secondHalf}</Predictions>
      </span>{" "}
      {``}
      in <Category>{category.name}</Category>
    </Wrapper>
  );
};
const Wrapper = styled.li`
  height: 50px;
  padding: 10px; 
  background-color: ${(props) => (props.isSelected ? "#fffbe6" : "white") };
  &:hover {
    background-color: #fffbe6;
  }
`;

const Predictions = styled.span`
  font-weight: bold;
`;
const Category = styled.span`
  color: #df55e6;
  font-style: italic;
`;

export default Suggestions;
