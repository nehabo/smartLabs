import React from 'react';
import { Link } from 'react-router';
import Logo from '../assets/logo';

export default (props) => {
  return (
    <div className="nav navbar">

      <Link to="search">
        <Logo />
      </Link>
    </div>
  );
};