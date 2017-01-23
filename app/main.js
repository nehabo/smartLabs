import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, browserHistory, IndexRedirect } from 'react-router';
import { persistStore, autoRehydrate } from 'redux-persist';
import createLogger from 'redux-logger';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Home from './modules/home/containers/home';
import Search from './modules/home/containers/search';
import Patient from './modules/home/containers/patient';
import Address from './modules/home/containers/address';
import Order from './modules/home/containers/order';
import reducers from './modules/home/reducers/';

const logger = createLogger();
const store = createStore(
  reducers,
  undefined,
  compose(
    autoRehydrate(),
    applyMiddleware(logger),
  ),
);
persistStore(store);

const routes = [{
  path: '/',
  component: Home,
  indexRoute: { onEnter: (nextState, replace) => { replace(store.getState().homeReducer.page); } },
  childRoutes: [
    { path: 'search', component: Search },
    { path: 'patient', component: Patient },
    { path: 'address', component: Address },
    { path: 'order', component: Order },
  ],
}];

const App = (
  <Provider store={store}>
    <Router
      history={browserHistory}
      routes={routes}
    />
  </Provider>
);

ReactDOM.render(App, document.getElementById('application'));
