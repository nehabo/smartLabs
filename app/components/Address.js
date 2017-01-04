import React from 'react';
import AutoCompleteForm from './autocomplete';
import Map from './map';
import Demo from './geolocation';


class Address extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      location: {
        lat: -25.363882,
        lng: 131.044922,
      },
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onHandleLocate = this.onHandleLocate.bind(this);
  }

  onSubmit(location) {
    this.setState({
      location,
    });
  }

  onHandleLocate(coords) {
    const lat = coords.latitude;
    const lng = coords.longitude;
    this.setState({
      location: {
        lat,
        lng,
      },
    });
  }

  render() {
    return (
      <div>
        <Demo
          onClick={this.onHandleLocate}
        />
        <AutoCompleteForm
          onSubmit={this.onSubmit}
        />
        <Map
          location={this.state.location}
        />
      </div>
    );
  }
}

export default Address;
