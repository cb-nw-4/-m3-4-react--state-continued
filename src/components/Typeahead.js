import React, { useState } from 'react';

import styled from 'styled-components';

import Suggestion from './Suggestion';

const Container = styled.div`
    margin: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InputContainer = styled.div`
    display: flex;
    margin-bottom: 10px;
`;

const Input = styled.input`
    width: 250px;
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 3px;
    font-size: 15px;
`;

const Button = styled.button`
    width: 60px;
    background-color: rgb(0, 0, 204);
    color: white;
    border-radius: 3px;
    border: none;
    margin-left: 5px;
`;

const Typeahead = ({ suggestions, handleSelect, categories }) => {
    const [searchBook, setSearchBook] = useState('');
    const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(0);
    
    const filteredSuggestions = suggestions.filter((suggestion) => suggestion.title.toLowerCase().includes(searchBook.toLowerCase()));

    const handleReset = () => {
        setSearchBook('');
        setSelectedSuggestionIndex(0);
    }
    
    return (
        <Container>
        <InputContainer>
        <Input 
            type = 'text'
            value = {searchBook}
            onChange = {(event) => {
                setSearchBook(event.target.value);
                if (event.target.value.length === 0) {
                    handleReset();
                }
            }}
            onKeyDown = {(event) => {
                switch (event.keyCode) {
                    case 13: {
                        handleSelect(filteredSuggestions[selectedSuggestionIndex].title);
                        return;
                    }
                    case 27: {
                        setSearchBook('');
                        return;
                    }
                    case 38: {
                        if (selectedSuggestionIndex > 0 && filteredSuggestions.length > 0 && searchBook.length > 0) {
                            setSelectedSuggestionIndex(selectedSuggestionIndex - 1);
                            console.log(selectedSuggestionIndex);
                        }
                        return;
                    }
                    case 40: {
                        if (filteredSuggestions.length > 0 && searchBook.length > 0) {
                            setSelectedSuggestionIndex(selectedSuggestionIndex + 1);
                            console.log(selectedSuggestionIndex);
                        }
                        return;
                    }
                }
            }}
        />
        <Button
            onClick = {handleReset}
        >
            Clear
        </Button>
        </InputContainer>
        <Suggestion 
            filteredSuggestions = {filteredSuggestions}
            categories = {categories}
            searchBook = {searchBook}
            handleSelect = {handleSelect}
            selectedSuggestionIndex = {selectedSuggestionIndex}
            setSelectedSuggestionIndex = {setSelectedSuggestionIndex}
        />
        </Container>
    );
}

export default Typeahead;



