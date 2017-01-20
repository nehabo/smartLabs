import React from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import { Link, browserHistory } from 'react-router';
import Map from './map';
import AddressForm from './addressForm';
import LocateMe from './geolocator';
import Nav from '../../common/components/nav/nav';

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

    this.onAutoSuggestSubmit = this.onAutoSuggestSubmit.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.handleOnLocate = this.handleOnLocate.bind(this);
    this.geocodeFailure = this.geocodeFailure.bind(this);
    this.geocodeSuccess = this.geocodeSuccess.bind(this);
    this.reverseGeocodeSuccess = this.reverseGeocodeSuccess.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
  }
  handleMapClick(latLng) {
    console.log(latLng.lat());
    const nextMarkers = [
      {
        position: latLng,
        defaultAnimation: 2,
        key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
      },
    ];
    this.props.handleClick(nextMarkers);

    // to get address
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'location': latLng }, (results, status) => {
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

  handleOnLocate(coords) {
    console.log(coords);
    this.props.onLocate(coords);
    const location = {
      lat: coords.latitude,
      lng: coords.longitude,
    };
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'location': location }, (results, status) => {
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

  geocodeFailure(err) {
    console.log('Not able to get location', err);
  }

  geocodeSuccess(lat, lng) {
    // updates location in state
    this.props.geocodeSuccess(lat, lng);

    // gets formatted address to populate form fields
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'location': { lat, lng } }, (results, status) => {
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

  reverseGeocodeSuccess(results) {
    this.props.getAddress(results);
  }

  onAutoSuggestSubmit(event) {
    event.preventDefault();
    const {address, handleFormSubmit} = this.props;
    this.props.handleFormSubmit(address);
  }

  handleFormSubmit(values) {
    browserHistory.push('order');
    this.props.handleFormSubmit(values);
  }

  render() {
    const AutocompleteItem = ({ suggestion }) =>
    (<div><i className="fa fa-map-marker suggestion" />{suggestion}</div>);

    return (
      <div>
        <Nav />
        <div className="btn-group btn-breadcrumb">
          <li className="btn btn-default"><i className="glyphicon glyphicon-home"></i>
            <Link to="search">Home</Link></li>
          <li className="btn btn-default"><Link to="patient">Patient</Link></li>
          <li className="btn btn-default">Address</li>
        </div>
        <div className="container">
          <div className="page-header">
            <h3>Address Details</h3>
          </div>
          <div className="autocomplete">
            <PlacesAutocomplete
              value={this.props.address}
              onChange={this.onChange}
              onSelect={this.onSelect}
              location={this.props.location}
              autocompleteItem={AutocompleteItem}
            />
            <LocateMe
              onClick={this.handleOnLocate}
            />
          </div>
            <Map
              location={this.props.location}
              markers={this.props.markers}
              onMapClick={this.handleMapClick}
            />
            <div className="addressform">
              <AddressForm
                streetAddress={this.props.streetAddress}
                locality={this.props.locality}
                city={this.props.city}
                district={this.props.district}
                _state={this.props._state}
                postalCode={this.props.postalCode}
                handleInputStreet={this.handleStreetInput}
                handleInputLocality={this.handleLocalityInput}
                handleInputPostal={this.handlePostalInput}
                onSubmit={this.handleFormSubmit}
              />
            </div>
          </div>
      </div>
    );
  }
}

Address.propTypes = {
};

export default Address;
