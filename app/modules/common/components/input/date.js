import React from 'react';

import { HOC } from 'formsy-react';

class Date extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleOnFocus = this.handleOnFocus.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.props.setValue(value);
    this.props.onChange(value);
  }

  handleOnFocus(event) {
    this.type = 'date';

  }

  render() {
    return (
      <div>
        <input
          className="textInput"
          value={this.props.getValue()}
          onFocus={this.handleOnFocus}
          type={this.type}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

Date.defaultProps = {
  onChange: () => {},
};

export default HOC(Date);
