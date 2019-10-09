import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import './App.css';
import { Data } from './lib/Data';

const data = new Data(process.env.REACT_APP_API_KEY);

export default class App extends Component {
  search = async query => {
    try {
      const { data: {photos} } = await data.search(query);
      console.log(photos);
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    this.search('yo');
    return (
      <BrowserRouter>
        <div className="container">
          <Nav search={this.search}/>
        </div>
      </BrowserRouter>
    );
  }
}

