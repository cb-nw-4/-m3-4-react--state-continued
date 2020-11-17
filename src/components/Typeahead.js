import React, { useState } from "react";
import styled, { css } from "styled-components";

export const Typeahead = ({ suggestions, handleSelect, category }) => {
  const [InputText, setInputText] = useState("");
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(0);
  const [escaped, setEscaped] = useState(0);
  const filteredArr = suggestions.filter((book) => {
    const bookLowerCase = book.title.toLowerCase();
    const typedLowerCase = InputText.toLowerCase();

    if (bookLowerCase.includes(typedLowerCase)) {
      return true;
    }
  });
  return (
    <Wrapper>
      <ButtonWrapper>
        <Input
          value={InputText}
          type="text"
          onChange={(ev) => {
            setInputText(ev.target.value);
            setEscaped(0);
          }}
          onKeyDown={(ev) => {
            switch (ev.key) {
              case "Enter": {
                handleSelect(filteredArr[selectedSuggestionIndex].title);
                return;
              }
              case "ArrowUp": {
                if (selectedSuggestionIndex > 0) {
                  setSelectedSuggestionIndex(selectedSuggestionIndex - 1);
                }
                return;
              }
              case "ArrowDown": {
                if (selectedSuggestionIndex < filteredArr.length - 1) {
                  setSelectedSuggestionIndex(selectedSuggestionIndex + 1);
                }
                return;
              }
              case "Escape":
                {
                  setEscaped(1);
                }
                return;
            }
          }}
        ></Input>
        <Button onClick={() => setInputText("")}>Clear</Button>
      </ButtonWrapper>
      {InputText.length > 1 && filteredArr.length > 0 && (
        <Ul noBooks={escaped === 1}>
          {filteredArr.map((book, i) => {
            const wordIndex = book.title
              .toLowerCase()
              .indexOf(InputText.toLowerCase());
            const firstHalf = book.title.slice(0, wordIndex + InputText.length);
            const secondHalf = book.title.slice(wordIndex + InputText.length);
            const categoryBookId = book.categoryId;
            return (
              <Li
                selected={selectedSuggestionIndex === i}
                key={book.id}
                onMouseEnter={() => {
                  setSelectedSuggestionIndex(i);
                }}
                onClick={() => {
                  handleSelect(book.title);
                }}
              >
                {firstHalf}
                <Span>{secondHalf}</Span>
                <Italics>
                  {" "}
                  in <p>{category[categoryBookId].name}</p>
                </Italics>
              </Li>
            );
          })}
        </Ul>
      )}
    </Wrapper>
  );
};

const Italics = styled.span`
  font-style: italic;
  p {
    color: purple;
    display: inline-block;
  }
`;

const Span = styled.span`
  font-weight: bold;
`;

const Ul = styled.ul`
  position: relative;
  top: 10px;
  box-shadow: 0px 0px 10px 5px rgba(165, 165, 165, 0.32);
  padding: 1rem;
  margin: auto 0;
  width: 50%;
  ${(props) => {
    return (
      props.noBooks &&
      css`
        display: none;
      `
    );
  }}
`;

const Li = styled.li`
  padding: 0.5rem;
  ${(props) =>
    props.selected &&
    css`
      background-color: lightyellow;
    `}
`;

const Wrapper = styled.div`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
`;

const Input = styled.input`
  padding: 0.6rem;
  width: 100%;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: rgb(35, 28, 203);
  border-radius: 5px;
  color: white;
  font-size: 1.2rem;
  padding: 5px 10px;
  margin-left: 1rem;
`;
