import React from 'react';
import _ from 'lodash';

export default (props) => {
  let cost = 0;
  return (
    <div className="cart">
      <h2>Selected Reports</h2>
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
                <td>{tag.cost}</td>
              </tr>);
            })
          }
        </tbody>

      </table>
      <h4>Total Cost <b>{cost}</b></h4>
      <div className="btn-warning" onClick={() => props.handleSubmit(items)}>Checkout</div>
    </div>
  );
};
