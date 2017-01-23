import React from 'react';
import Formsy from 'formsy-react';
import { Link } from 'react-router';
import Text from '../../common/components/input/text';
import Button from '../../common/components/input/button';
import Radio from '../../common/components/input/radio';
import Date from '../../common/components/input/date';

require('../styles.css');

class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      payment: 'cash',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({
      payment: value,
    });
  }

  render() {
    const options = [
      {
        name: 'card',
        value: 'card',
      },
      {
        name: 'cash',
        value: 'cash',
      },
    ]
    return (
      <Formsy.Form onSubmit={this.props.handlePatientSubmit} className="order">
        <Radio
          options={options}
          name="payment"
          onChange={this.onChange}
        />
        {
          this.state.payment==='card' &&
          <div>
            <Text
              name="card_no"
              placeholder="card number"
              type="number"
            />
            <Text
              name="cvv"
              placeholder="CVV"
              type="number"
            />
            <Date
              name="exp_date"
              placeholder="Expiry Date"
            />
          </div>
        }
        <Button type="submit">Checkout</Button>
      </Formsy.Form>
    );
  }
}

export default OrderForm;
