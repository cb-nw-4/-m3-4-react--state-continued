import React, { useState } from 'react';
import styled from "styled-components";
import { categories } from '../data';

const Button = styled.button`
  background: #2B00D7;
  color: white;
  padding: 1em 1.5em;
  font-weight: 700;
  border: 0;
  border-radius: 0.25em;
  margin: 0 0.5em;
`;

const Input = styled.input`
  padding: 1em 1.5em;
  font-weight: 400;
  min-width: 25em;
  border: 2px solid black;
  border-radius: 0.25em;
  margin: 0 0.5em;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20%;  
  align-content: center;
  justify-content: center;
`;

const Ul = styled.ul`
    -webkit-box-shadow: 0px 3px 15px 5px rgba(220,220,220,0.70); 
    box-shadow: 0px 3px 15px 5px rgba(220,220,220,0.70);
    margin: 5px auto;
    max-width: 400px;
    padding: 5px;
`

const Suggestion = styled.li`
    padding: 10px;
    margin: 10px;
    
    &:hover{
        background-color: #ffff99;
    }
`

const Category= styled.span`
    font-weight:70;
`;

const Text=styled.span`
    color: #A34E9C;
`;

const Typeahead = ({ suggestions, handleSelect }) => {
  const [value, setValue] = useState('');
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(0);
  let selectedTitle='';
  const matchedSuggestions = suggestions.filter(e =>{
    let containValue = e.title.toLowerCase().includes(value);
    if(value.length >=2 && containValue){
        return (e.title)
    }
  });
  return (
    <div>
      <Wrapper>
        <Input
          type="text"
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
          onKeyDown={(ev) => {
            switch (ev.key) {
              case "Enter": {
                  //handleSelect(selectedTitle);
                  setValue(selectedTitle);
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
        />
        <Button onClick={() =>setValue('')}>clear</Button>
      </Wrapper>
      {value.length>1 && ( <Ul>
                {matchedSuggestions.map((el, index)=>{
                    let newTitle=el.title.toLowerCase();
                    let getIndex=newTitle.indexOf(value)+value.length;
                    let firstpart=el.title.slice(0,getIndex);
                    let secondpart=el.title.slice(getIndex);
                    let category=el.categoryId;
                    const isSelected=index===selectedSuggestionIndex;
                    if(isSelected===true){
                        selectedTitle=el.title;
                    }
                    return(
                        <Suggestion
                        style={{
                          background: isSelected ? '#FFFDCA' : 'transparent',
                      }}
                        onClick={()=> setValue(el.title)}
                        key={el.id}>
                            <span>{firstpart}</span>
                            <span><strong>{secondpart} </strong></span>
                            <Category><i> 
                                in <Text>
                                        {categories[category].name}
                                    </Text>
                            </i></Category>
                        </Suggestion>
                    );
                })}
            </Ul>)}
    </div>
  );
};



export default Typeahead;
