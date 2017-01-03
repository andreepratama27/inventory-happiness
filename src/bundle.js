/* eslint-disable class-methods-use-this, no-useless-constructor*/
import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import { List, Map } from 'immutable'

import * as reducerCollection from './reducers';

import Product from './scenes/ListProduct'

/*Scnes*/
import AddProduct from './scenes/AddProduct'
import EditProduct from './scenes/EditProduct'
import Home from './scenes/Home'
import AddSuppliers from './scenes/AddSuppliers'
import ListSuppliers from './scenes/ListSuppliers'
import ListTransaksi from './scenes/ListTransaksi'
import AddTransaksi from './scenes/AddTransaksi'
import DetailProductTransactions from './scenes/DetailProductTransactions'


const reducer = combineReducers({ ...reducerCollection,
  routing: routerReducer,
});
const store = createStore(
  reducer,
);
const history = syncHistoryWithStore(browserHistory, store);

class RouterHome extends React.Component {
  constructor() {
      super();
  }
  componentDidMount() {

      const _store = store
      axios.get('/api/suppliers').then((result) => {
        const a = List([])
      
        _store.dispatch({
          type: 'INITIAL_SUPPLIER',
          payload: result.data
        });

      })

      axios.get('/api/transaction').then( result => {
        _store.dispatch({
          type: 'INITIAL_TRANSAKSI',
          payload: result.data
        })
      })
  }
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/product/add" component={AddProduct} />
          <Route path="/product/edit/:id" component={EditProduct} />
          <Route path="/suppliers" component={ListSuppliers} />
          <Route path="/suppliers/create" component={AddSuppliers} />
          <Route path="/transaksi" component={ListTransaksi} />
          <Route path="/product/:id/transactions" component={DetailProductTransactions} />
          <Route path="/transaksi/create" component={AddTransaksi} />
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<RouterHome />, document.querySelector('#app'));
