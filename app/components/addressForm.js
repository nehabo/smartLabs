import React from 'react';

class AddressForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleStreet = this.handleStreet.bind(this);
    this.handleLocality = this.handleLocality.bind(this);
    this.handlePostalCode = this.handlePostalCode.bind(this);
  }

  handleStreet(event) {
    const street = event.target.value;
    this.props.handleInputStreet(street);
  }

  handleLocality(event) {
    const locality = event.target.value;
    this.props.handleInputLocality(locality);
  }

  handlePostalCode(event) {
    const pincode = event.target.value;
    this.props.handleInputPostal(pincode);
  }

  render() {
    return (
      <form onSubmit={this.props.handleFormSubmit}>
        <input name="street_address" placeholder="Street Address" value={this.props.streetAddress} onChange={this.handleStreet} />
        <input name="locality" placeholder="Locality" value={this.props.locality} onChange={this.handleLocality} />
        <input name="city" placeholder="City" value={this.props.city} readOnly />
        <input name="postal_code" placeholder="Postal Code" value={this.props.postalCode} onChange={this.handlePostalCode} />
        <input name="state" placeholder="State" value={this.props.state} readOnly />
        <button type="submit">Confirm Location</button>
      </form>
    );
  }
}

export default AddressForm;
