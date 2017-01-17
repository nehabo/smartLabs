import React from 'react';
import Formsy from 'formsy-react';
import { Link } from 'react-router';
import Text from '../../common/components/input/text';
import Button from '../../common/components/input/button';

require('../styles.css');

class AddressForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleStreet = this.handleStreet.bind(this);
    this.handleLocality = this.handleLocality.bind(this);
    this.handlePostalCode = this.handlePostalCode.bind(this);
  }

  handleStreet(value) {
    this.props.handleInputStreet(value);
  }

  handleLocality(value) {
    this.props.handleInputLocality(value);
  }

  handlePostalCode(value) {
    this.props.handleInputPostal(value);
  }

  render() {
    return (
      <Formsy.Form onSubmit={this.props.onSubmit}>
        <Text
          name="street_address" placeholder="Street Address"
          value={this.props.streetAddress}
          onChange={this.handleStreet}
        />
        <Text
          name="locality" placeholder="Locality"
          value={this.props.locality}
          onChange={this.handleLocality}
        />
        <Text
          name="city" placeholder="City"
          value={this.props.city}
          readOnly
        />
        <Text
          name="city" placeholder="District"
          value={this.props.district}
          readOnly
        />
        <Text
          name="postal_code" placeholder="Postal Code"
          value={this.props.postalCode}
          onChange={this.handlePostalCode}
        />
        <Text
          name="state" placeholder="State"
          value={this.props._state}
          readOnly
        />
        <Link to="order"><Button type="submit">Confirm Location</Button></Link>
      </Formsy.Form>
    );
  }
}

export default AddressForm;
