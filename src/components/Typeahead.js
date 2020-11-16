import React from "react";
import styled from "styled-components";
import Suggestion from "./Suggestions";
import { categories } from "../data";

const Typeahead = ({ suggestions, handleSelect }) => {
  const [value, setValue] = React.useState("");
  const [selected, setSelected] = React.useState(0); 
  const [escape, setEscape] = React.useState(false);
 
 
  const matches = suggestions.filter((suggestion) => {
    const lowerCasedTitle = suggestion.title.toLowerCase();
    const lowerCasedInput = value.toLowerCase();
    const isIncluded = lowerCasedTitle.includes(lowerCasedInput);
    const minChar = value.length >= 2; 
    

    return isIncluded && minChar;
  });
  console.log("matches", matches.length);

  return (
    <div>
      <TextBox
        type="text"
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
        onKeyDown={(ev) => {
          switch (ev.key) {
            case "Enter": { 
              if((ev.target.value === "") || (ev.target.value !== matches[selected])) { 
                return false;
              } 
              else {
              handleSelect(matches[selected].title); 
              }
              break;
            }
            case "ArrowUp": {
              if (selected > 0) {
                setSelected(selected - 1);
              }

              break;
            }
            case "ArrowDown": {
              if (selected < matches.length - 1) {
                setSelected(selected + 1);
              }

              break;
            } 
            case "Escape" : { 
          setEscape(!escape); 
        break;
            } 
            default : { 
              break;
            }
          }
        }}
      />
      <Button onClick={() => setValue("")}>Clear</Button>

      <ListBox   escape={escape}>
        <List>
          {matches.map((match, matchIndex) => {
            const category = categories[match.categoryId];
            const isSelected = matchIndex === selected; 
            
            return (
              <Suggestion 
            
                key={match.id}
                isSelected={isSelected}
                suggestion={match.title}
                searchTerm={value}
                category={category}
                onClick={() => handleSelect(match.title)}
              >
                {match.title}
              </Suggestion>
            );
          })}
        </List>
      </ListBox>
    </div>
  );
};

const TextBox = styled.input`
  margin: 50px;
  width: 300px;
  height: 40px;
  border-radius: 5px;
  font-size: 110%;
  border: 1px solid lightslategrey;
  padding: 10px;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  background-color: blue;
  color: white;
  border-radius: 10px;
  margin-left: -30px;
  border: none;
  font-size: 110%;
`;

const ListBox = styled.div` 
display:${(props) => (props.escape  ? 'none' : 'flex')} ;
  height: 500px;
  width: 500px;
  margin-left: 50px;
  margin-top: -30px;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;


export default Typeahead;
