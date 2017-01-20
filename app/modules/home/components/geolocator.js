import React from 'react';
import { geolocated } from 'react-geolocated';

class LocateMe extends React.Component {

  handleClick(event) {
    event.preventDefault();
    const coords = this.props.coords;
    console.log(coords);
    this.props.onClick(coords);
  }

  render() {
    return (
      <a href="#" className="glyphicon glyphicon-map-marker"
        onClick={event => this.handleClick(event)}>Locate Me</a>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: 5000,
})(LocateMe);
