import React from 'react';

require('../styles.css');

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
      <div className="container">
        <form onSubmit={this.props.handleFormSubmit}>
          <label className="control-label col-sm-2" htmlFor="street_address">Address 1:</label>
          <div className="col-sm-10">
            <input
              name="street_address" placeholder="Street Address"
              className="form-control" value={this.props.streetAddress}
              onChange={this.handleStreet}
            />
          </div>
          <label className="control-label col-sm-2" htmlFor="locality">Address 2:</label>
          <div className="col-sm-10">
            <input
              name="locality" placeholder="Locality"
              className="form-control" value={this.props.locality}
              onChange={this.handleLocality}
            />
          </div>
          <label className="control-label col-sm-2" htmlFor="city">City:</label>
          <div className="col-sm-10">
            <input
              name="city" placeholder="City"
              className="form-control" value={this.props.city}
              readOnly
            />
          </div>
          <label className="control-label col-sm-2" htmlFor="district">District:</label>
          <div className="col-sm-10">
            <input
              name="city" placeholder="District"
              className="form-control" value={this.props.district}
              readOnly
            />
          </div>
          <label className="control-label col-sm-2" htmlFor="postal_code">Postal Code:</label>
          <div className="col-sm-10">
            <input
              name="postal_code" placeholder="Postal Code"
              className="form-control" value={this.props.postalCode}
              onChange={this.handlePostalCode}
            />
          </div>
          <label className="control-label col-sm-2" htmlFor="state">State:</label>
          <div className="col-sm-10">
            <input
              name="state" placeholder="State"
              className="form-control" value={this.props._state}
              readOnly
            />
          </div>
          <button type="submit" className="btn btn-default">Confirm Location</button>
        </form>
      </div>
    );
  }
}

export default AddressForm;
