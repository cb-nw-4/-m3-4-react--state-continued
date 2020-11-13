import React, {useState} from 'react';
import styled from 'styled-components';


const Typehead = ({suggestions, handleSelect}) =>{
    const [inputText, setInputText] = useState("");

    return (
    <Wrapper>
        <form>
            <InputBox type="text" value={inputText} 
            onChange={(ev)=> setInputText(ev.target.value)}
            onKeyDown={(ev)=>{
                if(ev.key==='Enter'){
                    handleSelect(ev.target.value);
                }
            }}
            />
            <ClearButton onClick={()=>setInputText('')}>Clear</ClearButton>
        </form>
        <p>The entered value: {inputText}</p>
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
    margin-bottom: 20px;
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

export default Typehead;