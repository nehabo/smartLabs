import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Search from './containers/search';
import reducers from './reducers/';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

const store = createStore(reducers);
const App = (
  <Provider store={store}>
    <Search />
  </Provider>
)


ReactDOM.render(App, document.getElementById('application'));
