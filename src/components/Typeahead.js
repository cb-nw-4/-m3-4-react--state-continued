import React from 'react';

import styled from 'styled-components';

import GlobalStyles from './GlobalStyles';

const Typeahead = (props) => {

    const [ value, setValue ] = React.useState("");

    return (
        <Container>
            <SearchArea>
            <SearchInput type="text" value={value} onChange={(ev) => {
                setValue(ev.target.value);
            }}
            onKeyDown={(ev) => {
                if (ev.key === "Enter") {
                    props.handleSelect(ev.target.value);
                }
            }}
            />
            <ClearButton onClick={() => setValue('')}>Clear</ClearButton>
                <ListWrapper>
                {props.suggestions.filter((suggestion) => {
                    if (suggestion.title.toLowerCase().includes(value.toLowerCase()) && value.length > 2) {
                        return true;
                    }
                })
                    .map((matches) => {
                        const firstHalf = matches.title.slice(0, matches.title.indexOf(value) + value.length);

                        const secondHalf = matches.title.slice(matches.title.indexOf(value) + value.length);

                        console.log(props.categories[matches.categoryId].name)

            return <List><Suggestion key={matches.id} onClick={() => props.handleSelect(matches.title)}><span>{firstHalf}</span><Prediction>{secondHalf}</Prediction> in <Category>{props.categories[matches.categoryId].name}</Category>
            </Suggestion>
            </List>
        })
    }
    </ListWrapper>
            </SearchArea>
        </Container>
    );
};


const Container = styled.div`
display: flex;
justify-content: center;
width: 100%;
height: 100vh;
`;

const SearchArea = styled.div`
margin: 35vh;
`;

const SearchInput = styled.input`
height: 30px;
width: 300px;
`;

const ClearButton = styled.button`
height: 30px;
width: 60px;
margin-left: 5px;
border-radius: 2px;
color: #fff;
background-color: #6600ff;
border: none;
`;

const ListWrapper = styled.div`
margin-top: 5px;
box-shadow: 2px 2px 5px grey;
border-radius: 2px;
`;

const List = styled.ul`
display: block;
position: relative;
width: 350px;
padding: 5px;
line-height: 2em;
`;

const Suggestion = styled.li`
font-size: 12px;
line-height: 20px;

&:hover {
    background: #FFFFCC;
}
  // styles here, including hover styles.
`;

const Prediction = styled.span`
font-weight: bold;
`;

const Category = styled.span`
font-style: italic;
color: purple;
`;

export default Typeahead;