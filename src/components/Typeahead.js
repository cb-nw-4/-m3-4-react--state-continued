import React from 'react';
import data from '../data'
import styled from 'styled-components';




const Typeahead = ({suggestions, handleSelect}) => {
    const [value, setValue] = React.useState('');

    

    const matchedSuggestions = suggestions.filter(suggestion =>{



        let containValue = suggestion.title.toLowerCase().includes(value);
        

        if(value.length >=2 && containValue){
            return (suggestion.title)
        }
        
    });


    return ( 
        <Wrapper>

            <div>
                <Input
                    type='text'
                    value={value}
                    onChange={(ev) =>setValue(ev.target.value)}
                    onKeyDown={(ev) =>{
                        if(ev.key ==='Enter'){
                            handleSelect(ev.target.value)
                        }
                    }}
                />
                <Button
                    onClick={() =>setValue('')}
                >
                    clear
                </Button>
            </div>
            <Ul>
                {matchedSuggestions.map((suggestion) =>{
                    return(
                        <Suggestion
                            key={suggestion.id}
                            onClick={()=> handleSelect(suggestion.title)}
                        >
                            {suggestion.title}
                        </Suggestion>
                    )
                })}
            </Ul>

    </Wrapper>
    );
}


const Wrapper = styled.div `
    display: flex;
    flex-direction:column;
    align-items: center;
    margin: 50px;
`

const Button = styled.button`
    padding: 10px 20px;
    background-color: blue;
    color: white;
    font-size: 20px;
    border-radius: 5px;
    border: none;

`

const Input = styled.input`
    
    font-size: 18px;
    padding: 10px; 
    
    &:active{
        border: 3px solid blue
    }

`

const Ul = styled.ul`
    -webkit-box-shadow: 0px 5px 10px 8px rgba(221,221,221,0.75); 
    box-shadow: 0px 5px 10px 8px rgba(221,221,221,0.75);
    margin: 10px;
`


const Suggestion = styled.li`
    padding: 10px;
    margin: 10px;
    
    &:hover{
        background-color:  #ffff99;
    }


`

export default Typeahead;