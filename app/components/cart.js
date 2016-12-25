import React from 'react';
import _ from 'lodash';

export default (props) => {
  let cost = 0;
  return (
    <div className="cart">
      <h2>Selected Reports</h2>
      <ol>
        {
          _.map(props.selected, (tag) => {
            cost += tag.cost;
            return (<li key={tag.id}>
              {tag.name} &nbsp; Price: {tag.cost}
            </li>);
          })
        }
      </ol>
      <h4>Total Cost <b>{cost}</b></h4>
    </div>
  );
};
