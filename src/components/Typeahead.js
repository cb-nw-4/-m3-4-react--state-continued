import React , { useState } from 'react'; 
import styled from "styled-components";

let filteredSuggestions = [];

const Typeahead = (props) => {
    const [value, setValue] = useState("");
    console.log(value,"value"); 
    filteredSuggestions = props.suggestions.filter ((item,index)=> { 
        return (item["title"].toLowerCase().indexOf(value)>= 0);
    });
    console.log(filteredSuggestions,"filteredSuggestions");
    return (
        <Wrapper>
            <Div>
                <input 
                    type="text" 
                    value={value} 
                    onChange={(ev) => setValue(ev.target.value)}
                    onKeyDown={(ev) => {
                        if (ev.key === "Enter") {
                            props.handleSelect(ev.target.value);
                        }
                    }}
                />
                {value.length >1 && (
                <SuggestionsListDiv>
                    <ul>
                        {filteredSuggestions.map ((item,index)=> { 
                            let title = item["title"];
                            let breakPoint = title.toLowerCase().indexOf(value)+value.length;
                            let itemTitlePart1 = title.slice(0,breakPoint); 
                            let itemTitlePart2 = title.slice(breakPoint,title.length);
                            return (
                                <li 
                                    key={index} 
                                    onClick={() => props.handleSelect(item["title"])}
                                >
                                    {itemTitlePart1}
                                    <span> 
                                        {itemTitlePart2}
                                    </span> 
                                    <i> in {item.categoryId}</i>
                                </li>
                            ); 
                        })}
                    </ul>
                </SuggestionsListDiv>)}
            </Div>
            <Button onClick={()=>setValue("")}>Clear</Button>
        </Wrapper>
    ); 
};

const Wrapper = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    width: 100vw; 
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`;
const Div =styled.div`
margin: 5px;
min-width:300px;
position: relative; 
display: flex; 
flex-direction: column; 
& input {
    padding:7px;
    width:100%; 
    height:100%;
    border:solid 0.5px gray;
    border-radius: 5px;
    &:focus {
        outline: none;
        box-shadow: 0 0 5px 3px rgb(94, 158, 214);
    };
}; 
`
const Button = styled.button`
background-color:#2808cf; 
color:white;
padding:5px 10px;
border:none;
border-radius: 5px;
font-size:18px;
width: 70px;
&:focus {
    outline: none;
    box-shadow: 0 0 5px 3px rgb(94, 158, 214);
};
`
const SuggestionsListDiv = styled.div`
border:1px solid black; 
position:absolute; 
top: 40px;
width:370px;
border:none;
box-shadow: 0px 0px 15px -2px gray;
border-radius: 5px;
& ul { 
    padding:5px;
    & li {
        padding: 5px;
        line-height:1.5;
        &:hover { 
            background-color: #fffbe6;
        };
        & span { 
            font-weight:bold;
        };
        & i {
            color:purple;
        };
    };
};
`

export default Typeahead; 