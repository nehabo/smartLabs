import React from 'react';
import OrderForm from './orderForm';

class Order extends React.Component {
  render() {
    return(
      <div>
        <h3>Order Form</h3>
        <OrderForm />
      </div>
    );
  }
}

export default Order;
