import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Header from './components/Header';
import ImageList from './components/ImageList';
import './App.css';
import { Data } from './lib/Data';

const data = new Data(process.env.REACT_APP_API_KEY);

export default class App extends Component {
  state = {
    query: '',
    images: []
  }

  componentDidMount() {
    this.search();
  }

  search = async (query='cats') => {
    try {
      const { data: {photos} } = await data.search(query);
      this.setState({query: query, images: photos.photo});
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header search={this.search}/>
          <ImageList images={this.state.images}/>
        </div>
      </BrowserRouter>
    );
  }
}

