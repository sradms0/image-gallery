import React from 'react';
import Nav from './Nav';
import SearchForm from './SearchForm';

export default props => {
  return (
    <div>
      <SearchForm search={props.search}/>
      <Nav defaultQueries={props.defaultQueries} search={props.search}/>
    </div>
  );
}
