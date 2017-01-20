import React from 'react';
import { Link, browserHistory } from 'react-router';
import Nav from '../../common/components/nav/nav';
import PatientForm from './patientForm';

class Patient extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    browserHistory.push('address');
    this.props.handlePatientSubmit(values);
  }

  render() {
    return(
      <div className="patient">
        <Nav />
        <div className="btn-group btn-breadcrumb">
          <li className="btn btn-default">
            <i className="glyphicon glyphicon-home" />
            <Link to="search">Home</Link>
          </li>
          <li className="btn btn-default">Patient</li>
        </div>
        <div className="container">
          <div className="page-header">
            <h3>Patient Details Form</h3>
          </div>
          <PatientForm
            onSubmit={this.handleSubmit}
            name={this.props.name}
            phone={this.props.phone_no}
            dob={this.props.dob}
            gender={this.props.gender}
            email={this.props.email}
          />
        </div>
      </div>
    );
  }
}

export default Patient;
