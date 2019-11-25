import React, { Component } from 'react';
import { withRouter, Route, Redirect, Switch } from 'react-router-dom';
import Header from './components/Header';
import ImageList from './components/ImageList';
import InvalidRoute from './components/InvalidRoute';
import LoadingIndicator from './components/LoadingIndicator';
import './App.css';
import { Data } from './lib/Data';
import { default_queries } from './etc/data';

const data = new Data(process.env.REACT_APP_API_KEY, default_queries);

/**
 * Root component for generating navigation for photo searching (should be wrapped in `withRouter`)
 *
 * @component
 */
class App extends Component {
  state = {
    query: '',
    loading: false,
    images: []
  }

  /**
   * Checks for url containing a query
   */
  componentDidMount() {
    this.assertLifeCycleQuery();
  }

  /**
   * Loads data if history is being navigated 
   */
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.assertLifeCycleQuery();
    }
  }
  
  /**
   * Set query for when app life cycle methods are run (DidUpdate, DidMount)
   *
   * @method
   */
  assertLifeCycleQuery = () => {
    const { location:{pathname} } = this.props,
          query = pathname.split('/').filter(s => s).pop();
    if (query && data.assert(pathname.slice(1))) this.search(query);
    else this.setState({images: []});
  }

  /**
   * Searches api for image-data and sets state for query, loading, and images
   *
   * @method
   * @async
   * @param {string=} [query='cats'] Type of images to search for
   */
  search = async (query='cats') => {
    try {
      this.setState({loading:true});
      const { data: {photos} } = await data.search(query);
      console.log(photos.photo);
      this.setState({query: query, loading: false, images: photos.photo});
    } catch(err) {
      console.log(err);
    }
  }

  /**
   * Conditionally displays image-data or loading indicator.
   *
   * @returns {ReactElement} Loading indication or image-data
   */
  displayHandler = () => {
    if (!data.queryFound) return null;
    if (this.state.loading) return (<LoadingIndicator/>);
    return (<ImageList title={this.state.query} images={this.state.images}/>);
  }

  /**
   * Builds routes from default queries from Data instance
   *
   * @returns {array} Array of Route components per Data.defaultQueries
   */
  generateDefaultRoutes = () => {
    const routes = data.defaultQueries.map(dq => 
      <Route key={dq} exact path={`/${dq}`}/>
    );
    return routes;
  }

  /**
   * Render application
   *
   * @return {ReactElement} Markup
   */
  render() {
    return (
      <div className="container">
        <Header defaultQueries={data.defaultQueries} search={this.search}/>
        {this.displayHandler()}
        <Switch>
          <Route exact path='/'><Redirect to={data.randomPath()}/></Route>
          {this.generateDefaultRoutes()}
          <Route exact path='/search/:id'/>
          <Route component={InvalidRoute}/>
        </Switch>
      </div>
    );
  }
};

export default withRouter(App);
