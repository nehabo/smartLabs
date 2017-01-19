import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Home from './modules/home/components/home';
import Search from './modules/home/containers/search';
import Patient from './modules/home/containers/patient';
import Address from './modules/home/containers/address';
import Order from './modules/home/containers/order';
import reducers from './modules/home/reducers/';

const store = createStore(reducers);
const App = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route name="home" path="/" component={Home} />
        <Route name="cart" path="search" component={Search} />
        <Route name="patient" path="patient" component={Patient} />
        <Route name="address" path="address" component={Address} />
        <Route name="order" path="order" component={Order} />
    </Router>
  </Provider>
);

ReactDOM.render(App, document.getElementById('application'));
