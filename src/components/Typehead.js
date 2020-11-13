import React, {useState} from 'react';
import styled from 'styled-components';

import Suggestion from './Suggestion';

let matchedSuggestions = [];

const Typehead = ({suggestions, handleSelect}) =>{
    const [inputText, setInputText] = useState("");
    let key =0;

    const findSuggestions = (ev)=>{

        setInputText(ev.target.value);
        
        matchedSuggestions = [];
        if(ev.target.value.length >1){
            matchedSuggestions = suggestions.filter((suggestion)=> {
                return (suggestion.title.match(new RegExp(ev.target.value, "gi")))? true:false;
            });
        }
    };

    return (
    <Wrapper>
        <form>
            <InputBox type="text" value={inputText} 
            onChange={findSuggestions}
            onKeyDown={(ev)=>{
                if(ev.key==='Enter'){
                    handleSelect(ev.target.value);
                }
            }}
            />
            <ClearButton onClick={()=>setInputText('')}>Clear</ClearButton>
        </form>
        {(matchedSuggestions.length>0)&&<SuggestionBox>
            {
                matchedSuggestions.map((suggestion)=>{
                    return <Suggestion key={key++} suggestion={suggestion} handleSelect={handleSelect}/>
                })
            }
        </SuggestionBox>}
    </Wrapper>
    );
};

const Wrapper = styled.div`
    margin-top: 100px;
    text-align: center;
`
const InputBox = styled.input`
    padding: 6px;
    width: 300px;
    margin-right: 8px;
    border-radius: 4px;
    border: 1px solid #cccccc;
    font-size: 16px;
`
const ClearButton = styled.button`
    background-color: #2B00D7;
    color:white;
    font-size: 16px;
    padding: 6px;
    width: 80px;
    border-radius: 4px;
    border: 1px solid #2B00D7;
`
const SuggestionBox = styled.ul`
    width: 388px;
    margin-right: auto;
    margin-left: auto;
    padding: 6px;
    margin-top: 6px;
    box-shadow: 1px 1px 4px grey;
    text-align: left;

`

export default Typehead;