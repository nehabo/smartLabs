import React from 'react';
import TokenInput from 'react-tokeninput';
import { Option } from 'react-tokeninput';
import _ from 'lodash';
import Cart from './cart';
import Options from './options';
import Address from './Address';

require('../styles.css');

class Search extends React.Component {
  renderComboboxOptions() {
    return _.map(this.props.options, name =>
        <Option key={name.id} value={name}>{name.name}</Option>
    );
  }

  render() {
    const options = this.props.options.length ?
      this.renderComboboxOptions() : [];

    return (
      <div>
        <h1>Bill your Medical Reports</h1>
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
        <Address />
      </div>
    );
  }
}

export default Search;
