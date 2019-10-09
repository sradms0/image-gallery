import React from 'react';
import { NavLink } from 'react-router-dom';

export default props => (
  <nav className="main-nav">
    <ul>
      <li><NavLink onClick={() => props.search('cats')}to='/cats'>Cats</NavLink></li>
      <li><NavLink onClick={() => props.search('dogs')}to='/dogs'>Cats</NavLink></li>
      <li><NavLink onClick={() => props.search('computers')}to='/computers'>Computers</NavLink></li>
    </ul>
  </nav>
);
