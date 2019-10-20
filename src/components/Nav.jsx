import React from 'react';
import { NavLink } from 'react-router-dom';

export default props => { 
  const navLinks = props.defaultQueries.map(dq => 
    <li key={dq} ><NavLink onClick={() => props.search(dq)}to={`/${dq}`}>{dq}</NavLink></li>
  );
  return (<nav className="main-nav"><ul>{navLinks}</ul></nav>);
}
