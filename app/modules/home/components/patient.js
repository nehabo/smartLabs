import React from 'react';
import PatientForm from './patientForm';

class Patient extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <h3>Patient Details Form</h3>
        <PatientForm
          handlePatientSubmit={this.props.handlePatientSubmit}
        />
      </div>
    );
  }
}

export default Patient;
