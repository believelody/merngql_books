import React, { Component, Fragment } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

//  components import
import BookList from './components/BookList';
import AddBook from './components/AddBook';

//  queries import
import { getBooksQuery, getAuthorsQuery } from './queries/queries';

//  style
import './App.css';
import styled from 'styled-components';

const Main = styled.div`

`;

const getQuery = gql`
  {
    ${getAuthorsQuery}
    ${getBooksQuery}
  }
`;

class App extends Component {

  render() {
    let { loading, books, authors } = this.props.data;

    return (
      <div>
        {
          loading
          ?
          <h1>Loading...</h1>
          :
          <Fragment>
            <h1>Book Reading List</h1>
            <BookList books={books} />
            <AddBook authors={authors} />
          </Fragment>
        }
      </div>
    );
  }
}

export default graphql(getQuery)(App);
