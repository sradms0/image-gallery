import React from 'react';
import { NavLink } from 'react-router-dom';

export default props => (
  <nav className="main-nav">
    <ul>
      <li><NavLink to="/cats">Cats</NavLink></li>
      <li><NavLink to="/dogs">Cats</NavLink></li>
      <li><NavLink to="/computers">Computers</NavLink></li>
    </ul>
  </nav>
);
