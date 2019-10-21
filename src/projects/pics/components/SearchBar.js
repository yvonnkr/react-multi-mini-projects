import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = { term: '' };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
    // console.log(this.state.term);
  };

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label htmlFor=''>Image Search</label>
            <input
              type='text'
              onChange={e => this.setState({ term: e.target.value })}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}
