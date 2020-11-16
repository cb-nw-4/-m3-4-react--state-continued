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

  &:hover {
    background-color: #fffbe6;
    cursor: pointer;
  }
`;

const Matches = (props) => {
  if (props.userInput.length > 1) {
    return (
      <BooksContainer>
        <Ul>
          {props.suggestions.filter(book => book.title.toLowerCase().indexOf(props.userInput.toLowerCase()) !== -1).map(item => {
            return <Li key={item.id} onClick={props.handleSelect}>{item.title}</Li>
          })}
        </Ul>
      </BooksContainer>
    );
  } else {
    return null;
  }
}

export default Matches;