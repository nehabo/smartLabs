import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import Home from './modules/home/components/home';
import Search from './modules/home/containers/search';
import Patient from './modules/home/containers/patient';
import Address from './modules/home/containers/address';
import Order from './modules/home/containers/order';
import reducers from './modules/home/reducers/';

const store = createStore(reducers);
const App = (
  <Provider store={store}>
    <Home />
  </Provider>
);

ReactDOM.render(App, document.getElementById('application'));
