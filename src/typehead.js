import React, { useState } from "react";
import styled from "styled-components";
import Suggestion from "./components/suggestion";

const Input = styled.input`
  width: 400px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
`;

const TypeheadWrapper = styled.div`
  position: relative;
`;

const Button = styled.button`
  background: blue;
  color: white;
  padding: 10px;
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 10px;
  border-radius: 5px;
`;

const Typehead = ({ data, handleSelect }) => {
  const [value, setValue] = useState("");
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = React.useState(
    0
  );

  return (
    <TypeheadWrapper>
      <Input
        value={value}
        onKeyDown={(ev) => {
          switch (ev.key) {
            case "Enter": {
              handleSelect(ev.target.value);
              return;
            }
            case "ArrowUp": {
              setSelectedSuggestionIndex(selectedSuggestionIndex - 1);
              console.log(selectedSuggestionIndex);
              return;
            }
            case "ArrowDown": {
              setSelectedSuggestionIndex(selectedSuggestionIndex + 1);
              console.log(selectedSuggestionIndex);
              return;
            }
          }
        }}
        onChange={(ev) => {
          setValue(ev.target.value);
        }}
      />
      <Button
        onClick={() => {
          setValue("");
        }}
      >
        Clear
      </Button>
      <Suggestion
        data={data}
        value={value}
        handleSelect={handleSelect}
        selectedSuggestionIndex={selectedSuggestionIndex}
        setSelectedSuggestionIndex={setSelectedSuggestionIndex}
      ></Suggestion>
    </TypeheadWrapper>
  );
};

export default Typehead;
