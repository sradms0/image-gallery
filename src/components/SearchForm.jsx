import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

/**
 * A component for display a search field to retrieve image-data (should be wrapped in `withRouter`)
 *
 * @component
 */
class SearchForm extends Component {
  state = { value: '' };

  /**
   * Updates `state.value` to match current input value
   *
   * @method
   * @param {object} event - The `event` object that contains the search fields input value
   */
  onChange = ({ target: {value} }) => this.setState({ value: value });

  /**
   * Handles submit of query.
   * Stops default form submission, retrieves image-data, and pushes new query to browser history.
   *
   * @method
   * @param {object} event - The `event` object that refers to the search form
   */
  onSubmit = e => {
    e.preventDefault();
    const { history, search } = this.props;
    const { value } = this.state;
    history.push(`/search/${value.replace(/\//gi, '-')}`);
    search(value);
    this.setState({ value: '' });
  }

  /**
   * Render search form
   *
   * @return {ReactElement} Markup
   */
  render() {
    return (
      <form className='search-form' onSubmit={this.onSubmit}>
        <input type='search' name='search' placeholder='Search' required value={this.state.value} onChange={this.onChange}/>
      <button type='submit' className='search-button'>
        <svg fill='#fff' height='24' viewBox='0 0 23 23' width='24' xmlns='http://www.w3.org/2000/svg'>
          <path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/>
      <path d='M0 0h24v24H0z' fill='none'/>
      </svg>
      </button>
      </form>
    );
  }
};

export default withRouter(SearchForm);
