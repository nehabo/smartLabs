import React from 'react';

import { HOC } from 'formsy-react';

class Text extends React.Component {
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
        <input
          className="textInput form-control"
          value={this.props.getValue()}
          type={this.props.type}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
          readOnly={this.props.readOnly}
        />
      </div>
    );
  }
}

Text.defaultProps = {
  type: 'text',
  onChange: () => {},
};

export default HOC(Text);
