import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Jared',
      comment: '',
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  handleNameChange(e) {
    const name = e.target.value;
    this.setState({ name }, () => console.log(this.state));
  }

  handleCommentChange(e) {
    const comment = e.target.value;
    this.setState({ comment }, () => console.log(this.state));
  }

  handleCommentSubmit() {
    console.log('submit', this.state.comment);
  }

  render() {
    return (
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <br />
        <label htmlFor="comment">Comment: </label>
        <input
          type="text"
          name="comment"
          value={this.state.comment}
          onChange={this.handleCommentChange}
          onKeyDown={e => e.key === 'Enter' ? this.handleCommentSubmit() : undefined}
        />
        <br />
        <button type="button" onClick={this.handleCommentSubmit}>Submit</button>
      </div>
    );
  }
}

export default App;
