import React, { useState } from "react";
import styled from "styled-components";

export const Typeahead = ({ suggestions, handleSelect }) => {
  const [InputText, setInputText] = useState("");
  return (
    <Wrapper>
      <ButtonWrapper>
        <Input
          value={InputText}
          type="text"
          onChange={(ev) => {
            setInputText(ev.target.value);
          }}
          onKeyDown={(ev) => {
            if (ev.key === "Enter") {
              handleSelect(ev.target.value);
            }
          }}
        ></Input>
        <Button onClick={() => setInputText("")}>Clear</Button>
      </ButtonWrapper>
      {InputText.length > 2 && (
        <Ul>
          {suggestions
            .filter((book) => {
              const bookLowerCase = book.title.toLowerCase();
              const typedLowerCase = InputText.toLowerCase();

              if (bookLowerCase.includes(typedLowerCase)) {
                return true;
              }
            })
            .map((book) => {
              return <Li key={book.id} onClick={() => {
                handleSelect(book.title)
              }}>{book.title}</Li>;
            })}
        </Ul>
      )}
    </Wrapper>
  );
};


const Ul = styled.ul`
  position: relative;
  top: 10px;
  box-shadow: 0px 0px 10px 5px rgba(165,165,165,0.32);
  padding: 1rem;
  margin: auto 0;
  width: 50%;
`;

const Li = styled.li`
padding: 0.5rem;
  &:hover {
    background-color: lightyellow;
    cursor: pointer;
  }

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
