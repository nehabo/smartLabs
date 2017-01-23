import React from 'react';
import TokenInput, { Option } from 'react-tokeninput';
import { browserHistory } from 'react-router';
import _ from 'lodash';
import Cart from './cart';
import Options from './options';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    browserHistory.push('patient');
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
      <div className="search">
        <div className="container">
          <div className="row">
            <TokenInput
              menuContent={options}
              onInput={this.props.handleInput}
              onSelect={this.props.handleSelect}
              onRemove={this.props.handleRemove}
              selected={this.props.selected}
              placeholder="Add tests"
            />
          </div>
          <div className="row">
            <Options handleSelect={this.props.handleSelect} options={this.props.options || []} />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <Cart selected={this.props.selected} />
          </div>
          <div className="row">
            <button className="btn purchase" onClick={this.onClick}>Purchase</button>
          </div>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  handleInput: React.PropTypes.func,
  handleSelect: React.PropTypes.func,
  handleRemove: React.PropTypes.func,
  selected: React.PropTypes.Array,
  options: React.PropTypes.func,
};

export default Search;
