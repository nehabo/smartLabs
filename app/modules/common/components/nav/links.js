import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

class Links extends React.Component {
  render() {
    const links = [
      { name: 'search', label: 'Cart' },
      { name: 'patient', label: 'Patient' },
      { name: 'address', label: 'Address' },
      { name: 'order', label: 'Order' }];
    return (
      <nav className="breadcrumb">
        {_.map(links, item => <a className="breadcrumb-item" href="#"><Link to={item.name}>{item.label}</Link></a>)}
      </nav>
    );
  }
}

export default Links;
