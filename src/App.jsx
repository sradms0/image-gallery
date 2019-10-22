import React, { Component } from 'react';
import { withRouter, Route, Redirect, Switch } from 'react-router-dom';
import Header from './components/Header';
import ImageList from './components/ImageList';
import InvalidRoute from './components/InvalidRoute';
import './App.css';
import { Data } from './lib/Data';
import { default_queries } from './etc/data';

const data = new Data(process.env.REACT_APP_API_KEY, default_queries);

export default withRouter(class App extends Component {
  state = {
    query: '',
    loading: false,
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
    const { location:{pathname} } = this.props,
          query = pathname.split('/').pop();

    if (query && data.assert(pathname.slice(1))) this.search(query);
    else this.setState({images: []});
  }

  search = async (query='cats') => {
    try {
      this.setState({loading:true});
      const { data: {photos} } = await data.search(query);
      this.setState({query: query, loading: false, images: photos.photo});
    } catch(err) {
      console.log(err);
    }
  }

  // show loading status, then images when data is finished
  displayHandler = () => {
    if (!data.queryFound) return null;
    if (this.state.loading) return (<p>Loading...</p>);
    return (<ImageList images={this.state.images}/>);
  }

  // build routes from default queries from data inst.
  generateDefaultRoutes = () => {
    const routes = data.defaultQueries.map(dq => 
      <Route key={dq} exact path={`/${dq}`}/>
    );
    return routes;
  }

  render() {
    return (
      <div className="container">
        <Header defaultQueries={data.defaultQueries} search={this.search}/>
        {this.displayHandler()}
        <Switch>
          <Route exact path='/'/>
          {this.generateDefaultRoutes()}
          <Route exact path='/search/:id'/>
          <Route component={InvalidRoute}/>
        </Switch>
      </div>
    );
  }
});
