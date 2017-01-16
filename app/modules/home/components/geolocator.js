import React from 'react';
import { geolocated } from 'react-geolocated';
import Button from '../../common/components/input/button';

class LocateMe extends React.Component {

  handleClick(event) {
    event.preventDefault();
    const coords = this.props.coords;
    console.log(coords);
    this.props.onClick(coords);
  }

  render() {
    return (
      <a href="#" onClick={event => this.handleClick(event)}>Get your location</a>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: 5000,
})(LocateMe);
