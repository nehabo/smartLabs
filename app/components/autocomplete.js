import React from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';

class AutoCompleteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: 'San Francisco, CA',
      location: {
        lat: null,
        lng: null,
      },
    };
    this.onChange = address => this.setState({ address });
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const { address } = this.state;
    geocodeByAddress(address, (err, { lat, lng }) => {
      if (err) {
        console.log('error', err);
      }
      console.log(`latitude and longitude for ${address}`, { lat, lng });
      this.props.onSubmit({ lat, lng });
    });
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.onChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AutoCompleteForm;
