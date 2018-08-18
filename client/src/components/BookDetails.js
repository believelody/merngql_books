import React, { Fragment } from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

import { getBookQuery } from '../queries/queries';

import styled from 'styled-components';

const BookDetailStyle = styled.div`
  margin-left: 20px;
`;

const List = styled.ul`
  list-style: none;
`;

class BookDetails extends React.Component {

  render() {
    let { loading, book } = this.props.data;
    return (
      <BookDetailStyle>
        {
          loading
          ?
          <h2>Loading...</h2>
          :
          <Fragment>
            <h3>{ book.name }</h3>
            <i>Genre: { book.genre }</i>
            <h5>by { book.author.name }</h5>
            Discover other books from the same author:
            <List>
            {
              book.author.books.map(item =>
                <li key={item.id}>{ item.name }</li>
              )
            }
            </List>
          </Fragment>
        }
      </BookDetailStyle>
    )
  }
}

export default graphql(gql`${getBookQuery}`, {
  options: (props) => ({
    variables: {
      id: props.match.params.id
  }})
})(BookDetails);
