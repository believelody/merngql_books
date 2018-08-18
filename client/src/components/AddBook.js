import React, { Component } from 'react';

import AddBookForm from './AddBookForm';

import styled from 'styled-components';

const AddBookStyle = styled.div`

`;

class AddBook extends Component {
  state = {
    name: '',
    genre: ''
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = () => console.log("submit");

  render() {
    let { authors } = this.props;

    return (
      <AddBookStyle>
        <h2>Add Book</h2>
        <AddBookForm fields={this.state} authors={authors} onChange={this.handleChange} onSubmit={this.handleSubmit} />
      </AddBookStyle>
    );
  }

}

export default AddBook;
