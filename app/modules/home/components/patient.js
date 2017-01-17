import React from 'react';
import { Link } from 'react-router';
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
    const step = this.state.step;
    this.props.handlePatientSubmit(values);
    this.props.onSubmit(step);
  }

  render() {
    return(
      <div>
        <h3>Patient Details Form</h3>
        <PatientForm
          onSubmit={this.handleSubmit}
          name={this.props.name}
          phone={this.props.phone_no}
          dob={this.props.dob}
          gender={this.props.gender}
          email={this.props.email}
        />
      </div>
    );
  }
}

export default Patient;
