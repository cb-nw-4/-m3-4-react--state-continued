import React, { useState } from 'react';
import GlobalStyles from './GlobalStyles';
import styled, { css } from 'styled-components';
import { categories } from '../data';

const Typehead=({ suggestions, handleSelect })=>{
    const [value, setValue]=useState('');
    const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(0);
    let selectedTitle='';
    const filteredArr=suggestions.filter(el=>{
        let newTitle=el.title.toLowerCase();
        if(value.length>=2){
            return newTitle.includes(value);
        }
    });
    return(
        <Wrapper>
            <Field  type="text"
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
            <Button onClick={() => setValue('')}>Clear</Button>
            {value.length>1 && ( <List>
                {filteredArr.map((el, index)=>{
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
                            <span>
                                {firstpart}
                            </span>
                            <span><strong>
                                {secondpart} 
                            </strong></span>
                            <Category><i> 
                                in <Text>
                                        {categories[category].name}
                                    </Text>
                            </i></Category>
                        </Suggestion>
                    );
                })}
            </List>)}
                    
        </Wrapper>
    );

};

const Wrapper=styled.div`
    width:500px;
    position:relative;
    margin-top:10%;

    align-content:left;
`;

const Field=styled.input`
    height:35px;
    width:350px;
    border: 1px solid gray;
    border-radius: 5px;
    margin:10px;
`;

const Button=styled.button`
    height:35px;
    width:70px;
    background-color:#4430db;
    color:white;
    border-radius:5px;
    border:none;
    cursor:pointer;
    font-size:15px;
    margin:10px;
    &:focus {
        outline:none;
    }
`;

const List=styled.ul`
    width: 350px;
    left: 10px;
    box-shadow: 3px 5px 10px #C1BE7C;
    position: absolute;
    max-height: 300px;
    overflow: auto;
    scroll-behavior:auto;
`;

const Suggestion=styled.li`
    padding:10px;
    font-size:15px;
    /* &:hover{
        background-color:#FFFDCA;
        cursor:pointer
    } */
    line-height:1.2;
`;

const Category= styled.span`
    font-size:12px;
    font-style:italic;
`;

const Text=styled.span`
    color:tomato;
`;

export default Typehead;