import React from 'react';
import { geolocated } from 'react-geolocated';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.onClick(this.props.coords);
    console.log(this.props.coords);
  }

  render() {
    return (
      <a href='#' onClick={this.handleClick}>Get your location</a>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Demo);
