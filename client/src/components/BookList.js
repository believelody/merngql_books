import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.ul`
  list-style: none;
  width: auto;
  margin: 0;
  padding: 0;
  height: 500px;
`;

const Item = styled.li`
  display: inline-block;
  border: 1px solid crimson;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, .4);
  margin: 10px;
  border-radius: 5px;
  padding: 20px 5px;
`;

const BookList = ({ books }) =>
<Wrapper>
  {
    books.map(book =>
      <NavLink key={book.id} style={{ textDecoration: "none", color: "crimson" }} to={`/books/${book.id}`}>
        <Item>
        { book.name }
        </Item>
      </NavLink>
    )
  }
</Wrapper>

export default BookList;
