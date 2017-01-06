import React from 'react';
import { geolocated } from 'react-geolocated';

class LocateMe extends React.Component {
  handleClick(event) {
    event.preventDefault();
    const coords = this.props.coords;
    this.props.onLocate(coords);
  }

  render() {
    return (
      <a href="#" onClick={event => this.handleClick(event)}>Get your location</a>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(LocateMe);
