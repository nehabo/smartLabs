import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Home from './modules/home/components/home';
import reducers from './modules/home/reducers/';

const store = createStore(reducers);
const App = (
  <Provider store={store}>
    <Home />
  </Provider>
);

ReactDOM.render(App, document.getElementById('application'));
