import React from "react";
import styled from "styled-components";

const BookListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  flex-grow: flex;
  box-shadow: 1px -1px 13px -1px #000000;
`;

const BookItem = styled.li`
  padding: 20px;
  font-size: 16px;
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  list-style: none;
`;

const CatText = styled.span`
  display: block;
  font-style: italic;
  color: purple;
  padding: 2px;
`;

const Bold = styled.span`
  font-weight: bold;
`;
const Regular = styled.span`
  font-weight: normal;
`;
const Suggestion = ({
  data,
  value,
  handleSelect,
  setSelectedSuggestionIndex,
  selectedSuggestionIndex,
}) => {
  if (value.length <= 1) {
    return "";
  }
  let bookList = [...data.books].map((book, i) => {
    return book.title;
  });

  let titles = bookList.filter((book) => {
    let bookTitleStr = book.toLowerCase();
    return bookTitleStr.includes(value.toLowerCase());
  });

  return (
    <BookListContainer>
      {titles.map((book, i) => {
        const slicedIndex = book.toLowerCase().indexOf(value.toLowerCase());
        const regularText = book.slice(0, slicedIndex + value.length);
        const boldText = book.slice(slicedIndex + value.length);
        let category = "";
        {
          data.books.forEach((bookId) => {
            if (bookId.title === book) category = bookId.categoryId;
          });
          Object.values(data.categories).forEach((cat) => {
            if (category === cat.id) {
              category = cat.name;
            }
          });
        }
        return (
          <BookItem
            key={i}
            onMouseEnter={() => {
              setSelectedSuggestionIndex(i);
              console.log(i);
            }}
            onClick={() => handleSelect(book)}
            style={{
              background:
                i === selectedSuggestionIndex
                  ? "hsla(50deg, 100%, 80%, 0.25)"
                  : "transparent",
            }}
          >
            <Regular>{regularText}</Regular>
            <Bold>{boldText}</Bold>
            <CatText>{category}</CatText>
          </BookItem>
        );
      })}
    </BookListContainer>
  );
};
export default Suggestion;
