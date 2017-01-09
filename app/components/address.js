import React from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import AddressForm from './addressForm';
import LocateMe from './geolocator';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

const PopUpMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={13}
    center={props.location}
    onClick={props.onMapClick}
  >
  {props.markers.map(marker => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)}
      />
    ))}
  </GoogleMap>
));

class Address extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = address => {
      this.props.onChange(address);
    };

    console.log(this.props);
    this.handleMapLoad = this.handleMapLoad.bind(this);
    this.onAutoSuggestSubmit = this.onAutoSuggestSubmit.bind(this);
  }

  handleMapLoad(map) {
    this._mapComponent = map;
  }

  handleMapClick(event) {
    console.log(event.latLng.lat());
    const nextMarkers = [
      {
        position: event.latLng,
        defaultAnimation: 2,
        key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
      },
    ];
    this.props.handleClick(nextMarkers);
  }

  onAutoSuggestSubmit(event) {
    event.preventDefault();
    const {address, handleFormSubmit} = this.props;
    this.props.handleFormSubmit(address);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onAutoSuggestSubmit}>
          <PlacesAutocomplete
            value={this.props.address}
            onChange={this.onChange}
          />
          <button type="submit">Submit</button>
        </form>
        <LocateMe
          onClick={this.props.onLocate}
        />
        <div style={{height: `350px`}}>
          <PopUpMap
            containerElement={
              <div style={{ height: `300px` }} />
            }
            mapElement={
              <div style={{ height: `300px` }} />
            }
            onMapLoad={this.handleMapLoad}
            location={this.props.location}
            onMapClick={(event) => this.handleMapClick(event)}
            markers={this.props.markers}
            onMarkerRightClick={(event) => this.handleMarkerRightClick(event)}
          />
        </div>
        <AddressForm />
      </div>
    );
  }
}

Address.propTypes = {
  handleFormSubmit: React.PropTypes.func,
};

export default Address;
