import React from 'react';
import styled from 'styled-components';

const BooksContainer = styled.div`
  margin-top: 5px;
  width: 340px;
`;

const Ul = styled.ul`
  padding: 10px;
  box-shadow: 2px 2px 10px lightgray;
  border-radius: 5px;
`;

const Li = styled.li`
  padding: 10px;
`;

const isSelected = {
  backgroundColor: '#fffbe6',
  cursor: 'pointer'
};

const Prediction = styled.span`
  font-weight: bold;
`;

const Category = styled.span`
  font-size: smaller;
  font-style: italic;
`;

const ColorStyle = styled.span`
  color: purple;
`;

const Matches = (props) => {
  let searchResult = [];

  if (props.userInput.length > 1) {
    searchResult = props.suggestions.filter((book) => book.title.toLowerCase().indexOf(props.userInput.toLowerCase()) !== -1);

    if (searchResult.length > 0) {
      return (
        <BooksContainer>
          <Ul>
            {searchResult.map((item, index) => {
              const titlePart1 = item.title.slice(0, item.title.toLowerCase().indexOf(props.userInput.toLowerCase()) + props.userInput.length);
              const titlePart2 = item.title.slice(item.title.toLowerCase().indexOf(props.userInput.toLowerCase()) + props.userInput.length, item.title.length);
              props.passNumMatches(index);
              if (props.selectionIndex === index) {
                props.passTitle(item.title);
                return (
                  <Li key={item.id} onClick={() => props.handleSelect(item.title)} onMouseEnter={props.handleMouseEnter} id={index} style={isSelected} >
                    {titlePart1}<Prediction>{titlePart2} </Prediction>
                    <Category>in <ColorStyle>{props.categories[item.categoryId].name}</ColorStyle></Category>
                  </Li>
                );
              } else {
                return (
                  <Li key={item.id} onClick={() => props.handleSelect(item.title)} onMouseEnter={props.handleMouseEnter} id={index}>
                    {titlePart1}<Prediction>{titlePart2} </Prediction>
                    <Category>in <ColorStyle>{props.categories[item.categoryId].name}</ColorStyle></Category>
                  </Li>
                );
              }
            })}
          </Ul>
        </BooksContainer>
      );
    } else {
      return null;
    }
  } else {
    return null;
  }
}

export default Matches;