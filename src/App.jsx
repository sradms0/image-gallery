import React, { Component } from 'react';
import { withRouter, Route, Redirect, Switch } from 'react-router-dom';
import Header from './components/Header';
import ImageList from './components/ImageList';
import './App.css';
import { Data } from './lib/Data';

const data = new Data(process.env.REACT_APP_API_KEY);

export default withRouter(class App extends Component {
  state = {
    query: '',
    images: []
  }

  // check for url containing a query
  componentDidMount() {
    this.assertLifeCycleQuery();
  }

  // load data if history is being navigated 
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.assertLifeCycleQuery();
    }
  }

  // set query for when app life cycle methods (DidUpdate, DidMount)
  assertLifeCycleQuery = () => {
    let query = this.props.location.pathname.split('/').pop();
    if (query) this.search(query);
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
      <div className="container">
        <Header search={this.search}/>
        <ImageList images={this.state.images}/>
        <Switch>
          <Route exact path='/'/>
          <Route path='/cats'/>
          <Route path='/dogs'/>
          <Route path='/computers'/>
          <Route path='/search/:id'/>
        </Switch>
      </div>
    );
  }
});
