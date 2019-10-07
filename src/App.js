import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Nav/>
        </div>
      </BrowserRouter>
    );
  }
}

