import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql, compose } from 'react-apollo';

import { addBookMutation, getBooksQuery } from '../queries/queries';

import AddBookForm from './AddBookForm';

import styled from 'styled-components';

const AddBookStyle = styled.div`
  background: white;
  padding: 10px;
  position: relative;
`;

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      genre: '',
      authorId: '0'
    };
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    let { name, genre, authorId } = this.state;
    e.preventDefault();
    this.props.addBookMutation({
      variables: {
        name,
        genre,
        authorId
      },
      refetchQueries: [
        { query: gql`{ ${getBooksQuery} }` }
      ]
    });
  }

  render() {
    let { authors } = this.props;

    return (
      <AddBookStyle>
        <h2 style={{textAlign: "center"}}>Add Book</h2>
        <AddBookForm fields={this.state} authors={authors} onChange={this.handleChange} onSubmit={this.handleSubmit} />
      </AddBookStyle>
    );
  }

}

export default compose(graphql(gql`${addBookMutation}`, { name: "addBookMutation" }))(AddBook);
