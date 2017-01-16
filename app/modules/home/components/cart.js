import React from 'react';
import _ from 'lodash';
import Button from '../../common/components/input/button';

export default (props) => {
  let cost = 0;
  return (
    <div className="cart">
      <h2>Diagnostics Selected</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Test</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>

          {
            _.map(props.selected, (tag) => {
              cost += tag.cost;
              return (<tr>
                <td key={tag.id}>
                  {tag.name}
                </td>
                <td>Rs. {tag.cost}</td>
              </tr>);
            })
          }
        </tbody>

      </table>
      <h4>TOTAL <b>Rs. {cost}</b></h4>
    </div>
  );
};
