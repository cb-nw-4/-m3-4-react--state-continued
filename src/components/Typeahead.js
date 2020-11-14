import React from 'react';
import data from '../data'
import styled from 'styled-components';




const Typeahead = ({suggestions, handleSelect}) => {
    const [value, setValue] = React.useState('');

    let firstHalf; 
    let  secondHalf;

    const matchedSuggestions = suggestions.filter(suggestion =>{

        let containValue = suggestion.title.toLowerCase().includes(value);        

        if(value.length >=2 && containValue){
            
            return (suggestion.title)
        }
        
    });

    console.log(matchedSuggestions)



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

            {matchedSuggestions.length > 0 &&
                <Ul>
                    {matchedSuggestions.map((suggestion) =>{
                        let indexOfValue = suggestion.title.toLowerCase().indexOf(value);
            
                        firstHalf = suggestion.title.slice(0, indexOfValue + value.length);
                        secondHalf = suggestion.title.slice(indexOfValue + value.length);


                        return(
                            <Suggestion
                                key={suggestion.id}
                                onClick={()=> handleSelect(suggestion.title)}
                            >
                                <span>
                                    
                                    {firstHalf}
                                    <Prediction>
                                        {secondHalf}
                                    </Prediction>
                                </span> 
                            
                                
                            </Suggestion>
                        )
                    })}
                </Ul>
            }

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
    box-shadow: -5px 8px 29px 26px rgba(194,194,194,0.64);
    -webkit-box-shadow: -5px 8px 29px 26px rgba(194,194,194,0.64);
    -moz-box-shadow: -5px 8px 29px 26px rgba(194,194,194,0.64);
    margin: 10px;
    border: 2px solid white;
`


const Suggestion = styled.li`
    padding: 10px;
    margin: 10px;
    
    &:hover{
        background-color:  #ffff99;
    }
`

const Prediction = styled.span`
    font-weight: bold;
`

export default Typeahead;