import React from 'react';
import { Link, browserHistory } from 'react-router';
import Nav from '../../common/components/nav/nav';
import PatientForm from './patientForm';

class Patient extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      step: 3,
    };
  }

  handleSubmit(values) {
    browserHistory.push('address');
    const step = this.state.step;
    this.props.handlePatientSubmit(values);
    this.props.onSubmit(step);
  }

  render() {
    return(
      <div className="patient">
        <Nav />
        <ol className="breadcrumb">
          <li><Link to="search">Cart</Link></li>
          <li className="active">Patient</li>
        </ol>
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
