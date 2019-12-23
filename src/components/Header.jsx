import React from 'react';
import Nav from './Nav';
import SearchForm from './SearchForm';
import PropTypes from 'prop-types';

/**
 * Component for displaying the application header, encapsulating features
 *
 * @component
 * @example
 * const search = async (query) => axios.get(`https://api.flickr.com/.../?...&api_key=${apiKey}&tags=${query}`&...);
 * const defaultQueries = ['cats', 'dogs', 'computers'];
 * return (<Header search={search} defaultQueries={defaultQueries}/>);
 */
const Header = props => {
  return (
    <div>
      <SearchForm search={props.search}/>
      <Nav defaultQueries={props.defaultQueries} search={props.search}/>
    </div>
  );
}

Header.propTypes = {
  search: PropTypes.func.isRequired,
  defaultQueries: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Header;
