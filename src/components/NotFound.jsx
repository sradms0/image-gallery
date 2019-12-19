import React from 'react';

/**
 * Component for notifying a user that an image search returned no results
 *
 * @component
 */
const NotFound = () => (
  <li className="not-found">
    <h3>No Results Found</h3>
    <p>Your search did not return any results. Please try again.</p>
  </li>
);
export default NotFound;
