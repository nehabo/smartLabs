import React from 'react';
import { Link } from 'react-router';
import Search from '../containers/search';
import Address from '../containers/address';
import Patient from '../containers/patient';
import Order from '../containers/order';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addressSubmit = this.addressSubmit.bind(this);
  }

  handleClick(step) {
    console.log(step);
    this.setState({
      step,
    });
  }

  handleSubmit(step) {
    console.log(step);
    this.setState({
      step,
    });
  }

  addressSubmit(step) {
    console.log(step);
    this.setState({
      step,
    });
  }

  render() {
    return (
      <div>
        {
          this.state.step === 1 ? <div><Search onSearch={this.handleClick} /></div> :
          this.state.step === 2 ?
          <div>
            <div className="row">
              <div className="col-xs-3">
                <Search onSearch={this.handleClick} />
              </div>
              <div className="col-xs-9">
                <Patient onSubmit={this.handleSubmit} />
              </div>
            </div>
          </div> :
          this.state.step == 3 ?
          <div>
            <div className="row">
              <div className="col-xs-3">
                <Search
                  onSearch={this.handleClick}
                />
              </div>
              <div className="col-xs-9">
                <Address onSubmit={this.addressSubmit} />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-3">
                <Patient onSubmit={this.handleSubmit} />
              </div>
              </div>
          </div> :
          <div>
            <div className="row">
              <div className="col-xs-3">
                <Search
                  onSearch={this.handleClick}
                />
              </div>
              <div className="col-xs-9">
                <Address />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-3">
                <Patient />
              </div>
              <div className="col-xs-9">
                <Order />
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Index;
