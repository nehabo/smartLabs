import React from 'react';
import { Panel, PanelGroup, Accordion } from 'react-bootstrap';
import _ from 'lodash';
import Map from './map';

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
      <Accordion>
  <Panel header="Collapsible Group Item #2" eventKey="2">
  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.
  </Panel>
  <Panel header="Collapsible Group Item #3" eventKey="3">
  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.

  </Panel>
</Accordion>
    </div>

  );
};
