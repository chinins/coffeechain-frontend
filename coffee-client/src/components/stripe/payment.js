import React, { Component } from 'react';
import { Elements } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';


class Payment extends Component {

  constructor (props) {
    super(props);
    this.id = this.props.id;
  }

  render () {
    return (
      <div>
        <Elements>
          <CheckoutForm history={this.props.history} id={this.id}> </CheckoutForm>
        </Elements>
      </div>
    );
  }
}

export default Payment;
