import React from 'react';
import { Link, browserHistory } from 'react-router';
import OrderForm from './orderForm';
import Nav from '../../common/components/nav/nav';

class Order extends React.Component {
  render() {
    return(
      <div>
        <Nav />
        <div className="btn-group btn-breadcrumb">
          <li className="btn btn-default">
            <i className="glyphicon glyphicon-home" />
            <Link to="search">Home</Link>
          </li>
          <li className="btn btn-default"><Link to="patient">Patient</Link></li>
          <li className="btn btn btn-default"><Link to="address">Address</Link></li>
          <li className="btn btn-default">Order</li>
        </div>
        <div className="container">
          <div className="page-header">
            <h3>Order Form</h3>
          </div>
          <OrderForm />
        </div>
      </div>
    );
  }
}

export default Order;
