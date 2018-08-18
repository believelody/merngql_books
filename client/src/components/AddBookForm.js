import React from 'react';
import styled from 'styled-components';

const BookForm = styled.form`
  position: relative
`;

const BookField = styled.div`
  padding: 13px 0;
`;

const SubmitBtn = styled.button`
  position: absolute;
  right: 30px;
  bottom: 5%;
  border-radius: 50%;
  font-weight: bold;
  font-size: 2rem;
  background: coral;
  color: white;
  width: 50px;
  height: 50px;
`;

const Input = styled.input`
  border-radius: 5px;
  min-width: 200px;
`;

const Select = styled.select`
  border-radius: 5px;
  min-width: 200px;
  font-size: 1rem;
`;

export default ({fields, authors, onChange, onSubmit}) =>
<BookForm onSubmit={onSubmit}>
  <BookField>
    <label>Book Name: </label>
    <Input name="name" value={fields.name} onChange={onChange} type="text" />
  </BookField>

  <BookField>
    <label>Genre: </label>
    <Input name="genre" value={fields.genre} onChange={onChange} type="text" />
  </BookField>

  <BookField>
    <label></label>
    <Select name="authorId" onChange={onChange} value={fields.authorId}>
      <option value="0" disabled>Select author</option>
      {
        authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>)
      }
    </Select>
  </BookField>

  <SubmitBtn type="submit">+</SubmitBtn>
</BookForm>
