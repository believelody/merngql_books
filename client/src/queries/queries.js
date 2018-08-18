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
