import React from 'react';
import _ from 'lodash';

export default (props) =>
  <div>
    {
      _.map(props.options, item =>
      <button className="optionButtons" onClick={ ()=> props.handleSelect(item) } key={item.id}>{item.name}</button>)
    }
  </div>;
