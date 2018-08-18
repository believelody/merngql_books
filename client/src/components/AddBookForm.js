import React from 'react';
import styled from 'styled-components';

const BookForm = styled.form`

`;

const BookField = styled.div`

`;

export default ({fields, authors, onChange, onSubmit}) =>
<BookForm onSubmit={onSubmit}>
  <BookField>
    <label>Book Name: </label>
    <input name="name" value={fields.name} onChange={onChange} type="text" />
  </BookField>

  <BookField>
    <label>Genre: </label>
    <input name="genre" value={fields.genre} onChange={onChange} type="text" />
  </BookField>

  <BookField>
    <label></label>
    <select>
      <option disabled>Select author</option>
      {
        authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>)
      }
    </select>
  </BookField>

  <button type="submit">+</button>
</BookForm>
