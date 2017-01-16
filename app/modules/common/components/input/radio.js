import React from 'react';

import { HOC } from 'formsy-react';

class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.props.setValue(value);
    this.props.onChange(value);
  }

  render() {
    return (
      <div>
        {this.props.options.map(item =>
          <div>
            <label htmlFor={item.name}>{item.value}</label>
            <input
              type="radio"
              value={item.value}
              onChange={this.handleChange}
              name={this.props.name}
            />
          </div>,
        )}
      </div>
    );
  }
}

export default HOC(Radio);
