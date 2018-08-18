import React, { Component } from 'react';

class BookList extends Component {

  render() {
    let { books } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Genre</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map(book =>
              <tr key={book.id}>
                <td>{ book.name }</td>
                <td><i>{book.genre}</i></td>
                <td><h6>{book.author.name}</h6></td>
              </tr>
            )
          }
        </tbody>
        </table>
    );
  }
}

export default BookList;
