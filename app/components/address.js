import React from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import AddressForm from './addressForm';
import LocateMe from './geolocator';

require('../styles.css');

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
      />
    ))}
  </GoogleMap>
));

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      geocodeResults: null,
      loading: false,
      reverseGeocodeResults: null,
    };

    this.onChange = address => {
      this.props.onChange(address);
      this.setState({ geocodeResults: null });
    };

    this.handleStreetInput = street => {
      this.props.handleStreetInput(street);
    };

    this.handleLocalityInput = locality => {
      this.props.handleLocalityInput(locality);
    };

    this.handlePostalInput = pincode => {
      this.props.handlePostalInput(pincode);
    };

    this.handleMapLoad = this.handleMapLoad.bind(this);
    this.onAutoSuggestSubmit = this.onAutoSuggestSubmit.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.geocodeFailure = this.geocodeFailure.bind(this);
    this.geocodeSuccess = this.geocodeSuccess.bind(this);
    this.reverseGeocodeSuccess = this.reverseGeocodeSuccess.bind(this);
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

    // to get address
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'location': event.latLng }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          console.log(results[0].formatted_address);
          this.setState({
            reverseGeocodeResults: this.reverseGeocodeSuccess(results),
          });
        } else {
          console.log('No results found');
        }
      } else {
        console.log('Geocoder failed due to: ' + status);
      }
      return results[0];
    });
  }

  onSelect(address) {
    this.props.onSelect(address);
    this.setState({ loading: true });

    geocodeByAddress(address,  (err, { lat, lng }) => {
      if (err) {
        console.log('Oh no!', err);
        this.setState({
          geocodeResults: this.geocodeFailure(err),
          loading: false,
        });
      }
      console.log(`Yay! got latitude and longitude for ${address}`, { lat, lng });
      this.setState({
        geocodeResults: this.geocodeSuccess(lat, lng),
        loading: false,
      });
    });
  }

  geocodeFailure(err) {
    console.log('Not able to get location', err);
  }

  geocodeSuccess(lat, lng) {
    this.props.geocodeSuccess(lat, lng);
  }

  reverseGeocodeSuccess(results) {
    this.props.getAddress(results);
  }

  onAutoSuggestSubmit(event) {
    event.preventDefault();
    const {address, handleFormSubmit} = this.props;
    this.props.handleFormSubmit(address);
  }

  handleClick(value) {
    this.props.handleInputChange(value);
  }

  render() {
    const AutocompleteItem = ({ suggestion }) =>
    (<div><i className="fa fa-map-marker suggestion" />{suggestion}</div>);
    return (
      <div>
          <PlacesAutocomplete
            value={this.props.address}
            onChange={this.onChange}
            onSelect={this.onSelect}
            location={this.props.location}
            autocompleteItem={AutocompleteItem}
          />
        <LocateMe
          onClick={this.props.onLocate}
        />
        <div style={{height: '350px'}}>
          <PopUpMap
            containerElement={
              <div style={{ height: '300px' }} />
            }
            mapElement={
              <div style={{ height: '300px' }} />
            }
            onMapLoad={this.handleMapLoad}
            location={this.props.location}
            onMapClick={event => this.handleMapClick(event)}
            markers={this.props.markers}
          />
        </div>
        <AddressForm
          streetAddress={this.props.streetAddress}
          locality={this.props.locality}
          city={this.props.city}
          postalCode={this.props.postalCode}
          handleInputStreet={this.handleStreetInput}
          handleInputLocality={this.handleLocalityInput}
          handleInputPostal={this.handlePostalInput}
        />
      </div>
    );
  }
}

Address.propTypes = {
};

export default Address;
