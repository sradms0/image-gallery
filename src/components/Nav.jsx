import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Component for displaying default queries through buttons
 *
 * @component
 * @example
 * const search = async (query) => axios.get(`https://api.flickr.com/.../?...&api_key=${apiKey}&tags=${query}`&...);
 * const defaultQueries = ['cats', 'dogs', 'computers'];
 * return(<Nav defaultQueries={defaultQueries} search={search}/>);
 *
 */
const Nav = props => { 
  const navLinks = props.defaultQueries.map(dq => 
    <li key={dq} ><NavLink onClick={() => props.search(dq)}to={`/${dq}`}>{dq}</NavLink></li>
  );
  return (<nav className="main-nav"><ul>{navLinks}</ul></nav>);
}

Nav.propTypes = { 
  search: PropTypes.func.isRequired,
  defaultQueries: PropTypes.array.isRequired
}

export default Nav;
