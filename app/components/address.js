import React from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import AddressForm from './addressForm';
import LocateMe from './geolocator';

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = address => this.setState({ address });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <PlacesAutocomplete
            value={this.props.address}
            onChange={this.onChange}
          />
          <button type="submit">Submit</button>
        </form>
        <LocateMe
          onClick={this.props.onLocate}
        />
        <AddressForm />
      </div>
    );
  }
}

export default Address;
