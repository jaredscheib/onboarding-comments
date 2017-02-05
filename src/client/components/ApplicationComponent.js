import React, { Component, PropTypes } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Jared',
      comment: '',
    };

    this.onCommentSubmit = this.onCommentSubmit.bind(this);
  }

  onChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [`${name}`]: value }, () => console.log(name, this.state[name]));
  }

  onCommentSubmit() {
    this.props.handleCommentSubmit(this.state.comment);
  }

  render() {
    return (
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={e => this.onChange(e)}
        />
        <br />
        <label htmlFor="comment">Comment: </label>
        <input
          type="text"
          name="comment"
          value={this.state.comment}
          onChange={e => this.onChange(e)}
          onKeyDown={e => e.key === 'Enter' ? this.onCommentSubmit() : undefined}
        />
        <br />
        <button type="button" onClick={this.onCommentSubmit}>Submit</button>
      </div>
    );
  }
}

App.defaultProps = {
  handleCommentSubmit: comment => console.log('submit', comment),
};

App.propTypes = {
  handleCommentSubmit: PropTypes.func,
};

export default App;
