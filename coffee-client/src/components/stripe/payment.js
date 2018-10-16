import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as CoffeeActions from '../../redux/actions/coffees';
import { Elements } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';


class Payment extends Component {

  render() {

    return (
      <div>
        <Elements>
          <CheckoutForm> </CheckoutForm>
          </Elements>
      </div>
    )
  }
};

export default Payment;
