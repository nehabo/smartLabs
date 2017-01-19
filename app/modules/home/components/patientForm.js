import React from 'react';
import Formsy from 'formsy-react';
import Text from '../../common/components/input/text';
import Button from '../../common/components/input/button';
import Radio from '../../common/components/input/radio';
import Date from '../../common/components/input/date';

require('../styles.css');

class PatientForm extends React.Component {

  render() {
    const options = [
      {
        name: 'male',
        value: 'male',
      },
      {
        name: 'female',
        value: 'female',
      },
    ]
    return (
      <Formsy.Form onSubmit={this.props.onSubmit} className="patient-form">
        <Text
          name="name"
          placeholder="Name"
          value={this.props.name}
        />
        <Text
          name="phone"
          placeholder="Phone Number"
          value={this.props.phone}
        />
        <Date
          name="dob"
          placeholder="Date of Birth"
          value={this.props.dob}
        />
        <Radio
          options={options}
          name="gender"
          value={this.props.gender}
        />
        <Text
          name="email"
          placeholder="Email"
          value={this.props.email}
        />
        <Button type="submit">Confirm Details</Button>
      </Formsy.Form>
    );
  }
}

export default PatientForm;
