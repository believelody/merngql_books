import React, { Component, Fragment } from 'react';
import { gql } from 'apollo-boost';
import { graphql, compose } from 'react-apollo';
import { BrowserRouter, Route } from 'react-router-dom';

//  components import
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import BookDetails from './components/BookDetails';

//  queries import
import { getBooksQuery, getAuthorsQuery } from './queries/queries';

//  style
import './App.css';
import styled from 'styled-components';

const Main = styled.div`
  margin: 1% 5%;
`;

const Container = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  min-height: 700px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  position: relative;
  background: #ccc;
  padding: 10px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const FlexContent = styled.div`
  border: 1px solid tomato;
  border-radius: 10px;
  position: relative;
  overflow-x: hidden;
  background: #eee;
  box-shadow: 7px 5px 2px rgba(0, 0, 0, .4);
`;

const SpinnerWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: auto;
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
      <BrowserRouter>
        <Main>
          <h1 style={{textAlign: "center"}}>Book Reading List</h1>
          <Container>
          {
            loading
            ?
            <SpinnerWrapper><h1>Loading...</h1></SpinnerWrapper>
            :
            <Fragment>
              <FlexContent>
                <BookList books={books} />
                <AddBook authors={authors} />
              </FlexContent>
              <FlexContent>
                <h2 style={{textAlign: "center"}}>Book Details</h2>
                <p style={{textAlign: "center"}}>
                  Select a book to see details
                </p>
                <hr />
                <Route path="/books/:id" component={BookDetails} />
              </FlexContent>
            </Fragment>
          }
          </Container>
        </Main>
      </BrowserRouter>
    );
  }
}

/* For the purpose of multi queries, we might use the syntax below. Don't forget that each query must be constructed with gql. In this case, props will contain two objects which contain each data objects like loading from the graphql response. So we must not use this.props.data but this.props.getAuthorsQuery for example if we want to retrieve loading and authors.

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(getBooksQuery, { name: "getBooksQuery" })
)(App); */

export default graphql(getQuery)(App);
