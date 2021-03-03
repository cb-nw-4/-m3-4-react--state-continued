import React from "react";
import styled from "styled-components";

import { categories } from "../data";

const Entry = ({ suggestions, input }) => {
  let split =
    suggestions.title.toLowerCase().indexOf(input.toLowerCase()) + input.length;
  let genre = categories[suggestions.categoryId].name;
  return (
    <>
      <span>{suggestions.title.slice(0, split)}</span>
      <StyledPrediction>{suggestions.title.slice(split)}</StyledPrediction>
      <StyledCategory>
        <span> in</span> {genre}
      </StyledCategory>
    </>
  );
};

const Suggester = ({
  list,
  input,
  handleSelect,
  selectedIndex,
  setSelectedIndex,
}) => {
  if (input.length > 1) {
    return (
      <ul>
        {list.map((suggestions, index) => {
          let selected = selectedIndex === index ? true : false;

          return (
            <li
              onMouseEnter={() => setSelectedIndex(index)}
              style={{
                background: selected ? "lightyellow" : "transparent",
                color: selected ? "black" : "black",
              }}
              key={suggestions.id}
              onClick={() => handleSelect(suggestions.title)}
            >
              <Entry
                suggestions={suggestions}
                input={input}
                selected={selected}
              />
            </li>
          );
        })}
      </ul>
    );
  } else {
    return "";
  }
};

// const isSelected = () => {

// }

const TypeAhead = ({ suggestions, handleSelect }) => {
  const [value, setValue] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [list, setList] = React.useState([]);

  const getList = (input) => {
    if (input.length > 1) {
      let filteredList = suggestions.filter((suggestions) => {
        return suggestions.title.toLowerCase().includes(input.toLowerCase());
      });
      // console.log('filteredList',filteredList);
      setList(filteredList);
    } else {
      return "";
    }
  };

  return (
    <StyledBox>
      <InputWrapper>
        <StyledInput
          type="text"
          value={value}
          onChange={(ev) => {
            setValue(ev.target.value);
            getList(ev.target.value);
          }}
        />
        <StyledButton onClick={() => setValue("")}>Clear</StyledButton>
      </InputWrapper>
      <Suggester
        list={list}
        input={value}
        handleSelect={handleSelect}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </StyledBox>
  );
};

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;

  li {
    padding: 0.3rem;
    border-radius: 3px;
    &:hover {
      cursor: pointer;
      background: yellow;
      color: white;
    }
  }
  ul {
    box-shadow: 0px 0px 5px lightgrey;
    position: absolute;
    top: 435px;
    list-style-type: none;
    width: 405px;
    margin: 0 auto;
    padding: 0;
  }
`;
const InputWrapper = styled.div`
  display: flex;
`;

const StyledPrediction = styled.span`
  font-weight: bold;
`;
const StyledCategory = styled.span`
  color: pink;
  font-style: italic;
  font-size: 0.75rem;
  span {
    color: black;
  }
`;

const StyledInput = styled.input`
  border: 1px solid lightgray;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  height: 40px;
  width: 300px;
  margin-right: 15px;
  position: relative;
`;

const StyledButton = styled.button`
  background: blue;
  border: none;
  color: white;
  border-radius: 3px;
  height: 40px;
  width: 90px;
`;
export default TypeAhead;
