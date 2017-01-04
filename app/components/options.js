import React from 'react';
import _ from 'lodash';

export default props =>
  <div>
    {
      _.map(props.options, item =>
        <div className="btn btn-info" onClick={() => props.handleSelect(item)} key={item.id}>
          {item.name}
        </div>)
    }
  </div>;
