// CheckoutForm.js
import React from 'react';
import { injectStripe } from 'react-stripe-elements';

import AddressSection from './AddressSection';
import CardSection from './CardSection';

var stripe = Stripe('pk_test_eaHxpZdwd2DYpjuAz4KpbGim');
var elements = stripe.elements();

class CheckoutForm extends React.Component {
  handleSubmit = (ev) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();

    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    this.props.stripe.createToken({ name: 'Jenny Rosen' }).then(({ token }) => {
      console.log('Received Stripe token:', token);
    });

    // However, this line of code will do the same thing:
    //
    // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});

    // You can also use createSource to create Sources. See our Sources
    // documentation for more: https://stripe.com/docs/stripe-js/reference#stripe-create-source
    //
    // this.props.stripe.createSource({type: 'card', owner: {
    //   name: 'Jenny Rosen'
    // }});
  };

  render() {
    return (
      <form action="/charge" method="post" id="payment-form">
        <div class="form-row">
          <label for="card-element">
            Credit or debit card
    </label>
          <div id="card-element">
    </div>

    <div id="card-errors" role="alert"></div>
        </div>

        <button>Submit Payment</button>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);