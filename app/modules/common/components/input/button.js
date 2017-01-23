import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    return (
      <div>
        <button
          className="btn"
          value={this.props.value}
          type={this.props.type}
          onClick={this.handelClick}
        >{this.props.children}
        </button>
      </div>
    );
  }
}

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
};

export default Button;