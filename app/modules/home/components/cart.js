import React from 'react';
import _ from 'lodash';

export default (props) => {
  let cost = 0;
  return (
    <div>
      <h2>Diagnostics Selected</h2>
      <table className="table cart">
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
