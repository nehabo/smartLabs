import React from 'react';
import Search from '../containers/search';
import Address from '../containers/address';
import Patient from '../containers/patient';
import Order from '../containers/order';
import Nav from '../../../modules/common/components/nav/nav';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <Nav />
        <div className="row">
          <div className="col-xs-3">
            <Search />
          </div>
          <div className="col-xs-9">
            <Address />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-3">
            <Patient />
          </div>
          <div className="col-xs-9">
            <Order />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
