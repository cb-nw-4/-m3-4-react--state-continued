import React from 'react';
import data from '../data'
import styled, { css } from 'styled-components';




const Typeahead = ({suggestions, handleSelect}) => {
    const [value, setValue] = React.useState('');
    const [selectedSUggestionIndex, setSelectedSuggestionIndex] = React.useState(0);
    
    let firstHalf, secondHalf;
    let categories = data.categories;

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

                        switch(ev.key){
                            case 'Enter':{
                                handleSelect(ev.target.value);
                                return;
                            }
                            case 'ArrowUp':{
                                setSelectedSuggestionIndex(selectedSUggestionIndex -1);
                                return;

                            }
                            case 'ArrowDown':{
                                setSelectedSuggestionIndex(selectedSUggestionIndex + 1);
                                return;
                            }
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
                    {matchedSuggestions.map((suggestion, i) =>{
                        let indexOfValue = suggestion.title.toLowerCase().indexOf(value);
            
                        firstHalf = suggestion.title.slice(0, indexOfValue + value.length);
                        secondHalf = suggestion.title.slice(indexOfValue + value.length);
                    
                        return(
                            <Suggestion
                                key={suggestion.id}
                                onClick={()=> handleSelect(suggestion.title)}
                            
                                // className= {selectedSUggestionIndex === i ? "selected" : null }
                                onMouseOver={() => {
                                    setSelectedSuggestionIndex(i)
                                }}
                                
                                selected= {selectedSUggestionIndex === i}
                
                            >
                                <span>
                                    {firstHalf}
                                    <Prediction>
                                        {secondHalf}
                                    </Prediction>

                                    <span className='spaceIn'>
                                        in
                                    </span>

                                    <span>
                                        {categories[suggestion.categoryId].name}
                                    </span>
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
    border: none;
    width: 50%;
`


const Suggestion = styled.li`
    padding: 20px;
    line-height: 1.5em;
    margin: 10px;

    &.selected {
        background: hsla(50deg, 100%, 80%, 0.25);
    }

    .spaceIn{
        padding-left: 2px;
        padding-right: 2px;
    }

    & span :last-child{
        color: purple;
        font-style: italic;
    }

    ${(props) => {
        return props.selected && css`
            background: hsla(50deg, 100%, 80%, 0.25);
        `
    } }

`

const Prediction = styled.span`
    font-weight: bold;
`


export default Typeahead;