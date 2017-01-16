import React from 'react';
import TokenInput, { Option } from 'react-tokeninput';
import _ from 'lodash';
import Cart from './cart';
import Options from './options';

require('../styles.css');

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      className: 'min-cart',
    };
  }

  onClick(event) {
    if (this.state.className === 'min-cart') {
      console.log("className is min-cart");
      this.setState({
        className: 'cart',
      });
    } else {
      console.log('className is cart');
      this.setState({
        className: 'min-cart',
      })
    }
  }

  renderComboboxOptions() {
    return _.map(this.props.options, name =>
      (
        <Option
          key={name.id}
          value={name}
        >{name.name}</Option>
      ),
    );
  }

  render() {
    const options = this.props.options.length ?
      this.renderComboboxOptions() : [];

    return (
      <div className={this.state.className}>
        <TokenInput
          menuContent={options}
          onInput={this.props.handleInput}
          onSelect={this.props.handleSelect}
          onRemove={this.props.handleRemove}
          selected={this.props.selected}
          placeholder="Add tests"
        />
        <Options handleSelect={this.props.handleSelect} options={this.props.options || []} />
        <Cart selected={this.props.selected} />
        <button onClick={this.onClick}>Purchase</button>
      </div>
    );
  }
}

Search.propTypes = {
  handleInput: React.PropTypes.func,
  handleSelect: React.PropTypes.func,
  handleRemove: React.PropTypes.func,
  selected: React.PropTypes.func,
  options: React.PropTypes.func,
};

export default Search;
