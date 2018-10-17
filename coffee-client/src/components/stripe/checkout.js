import React, { Component } from 'react';
import Payment from './payment';

class Checkout extends Component {

  constructor (props) {
    super(props);
    this.id = this.props.match.params.id;
  }

  render () {
    return (
      <div>
        <Payment history={this.props.history} id={this.id}/>
      </div>
    );
  }
}

export default Checkout;
