export const getBookQuery = `
  query($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          id
          name
        }
      }
    }
  }
`;

export const getBooksQuery = `
  books {
    id
    name
    genre
    author {
      name
      books {
        name
      }
    }
  }
`;

export const getAuthorsQuery = `
  authors {
    id
    name
  }
`;

export const addBookMutation = `
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;
