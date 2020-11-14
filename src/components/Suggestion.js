import React from "react"
import styled from "styled-components";
import data from "../data";



const Suggestion = styled.li`
    font-size:16px;
    margin:10px;
    background-color: lightyellow;
`;

const SearchSuggestions = (props) => {
    console.log(props.searchSuggestion)

    
    
    return (
        <>

        {data.books.filter(book => book.title.toLowerCase().includes(props.value.toLowerCase())).map((suggestion) => {
            
            return (
                
            <Suggestion
                key={suggestion.id}
                // onClick={() => handleSelect(suggestion.title)}
            >
                {suggestion.title}
            </Suggestion>
            
            );
        })}
        </>
    )
};



export default SearchSuggestions;