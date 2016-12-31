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

import Product from './scenes/ListProduct'

/*Scnes*/
import AddProduct from './scenes/AddProduct'
import EditProduct from './scenes/EditProduct'
import Home from './scenes/Home'


const reducer = combineReducers({ ...reducerCollection,
  routing: routerReducer,
});
const store = createStore(
  reducer,
);
const history = syncHistoryWithStore(browserHistory, store);

class RouterHome extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/product/add" component={AddProduct} />
          <Route path="/product/edit/:id" component={EditProduct} />
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<RouterHome />, document.querySelector('#app'));
