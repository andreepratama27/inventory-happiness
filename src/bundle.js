/* eslint-disable class-methods-use-this, no-useless-constructor*/
import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import * as reducerCollection from './reducers';

import Product from './product'

/*Scnes*/
import AddProduct from './scenes/AddProduct'


const reducer = combineReducers({ ...reducerCollection,
  routing: routerReducer,
});
const store = createStore(
  reducer,
);
const history = syncHistoryWithStore(browserHistory, store);

class Home extends React.Component {
  constructor() {
    super();
    this.state = { name: 'Seasdt Stas' };
  }
  render() {
    return (
      <div className="container">
        <h1>laskdfjaslkfjskdf</h1>
      </div>
    );
  }
}

class RouterHome extends React.Component {
  componentDidMount(){
    console.log("sdfalskfjld")
  }
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/product/add" component={AddProduct} />
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<RouterHome />, document.querySelector('#app'));
