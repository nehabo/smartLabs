import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import Search from '../containers/search';
import Address from '../containers/address';
import Patient from '../containers/patient';
import Order from '../containers/order';
import Home from '../containers/home';
import Main from '../../../main';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    this.props.onNextPage(nextProps.location.pathname);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
