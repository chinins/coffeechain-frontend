import React from 'react';
import { connect } from 'react-redux';
import { CardElement, injectStripe } from 'react-stripe-elements';

import './stripe-style.css';

const handleBlur = () => {
  console.log('[blur]');
};
const handleChange = (change) => {
  console.log('[change]', change);
};

const handleFocus = () => {
  console.log('[focus]');
};
const handleReady = () => {
  console.log('[ready]');
};

const createOptions = (fontSize, padding) => {
  return {
    style: {
      base: {
        fontSize,
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Source Code Pro, monospace',
        '::placeholder': {
          color: '#aab7c4',
        },
        padding,
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };
};

class CheckoutForm extends React.Component {

  constructor(props) {
    super(props);
    this.id = this.props.id;
  }

  componentDidMount() {
    console.log(this.id);
  }

  submit = async (ev) => {
    ev.preventDefault();
    let { token } = await this.props.stripe.createToken({ name: 'Name' });
    console.log("HERE", token);
    let response = await fetch('http://192.168.1.188:4000/charge', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: token
    });

    if (response.ok) console.log('Purchase Complete!');
  }
  render () {
    return (
      <div>
        <div className="checkout">    CHECKOUT </div>
        <span className="Hr" > </span>
        <div className="background-col">
          <form onSubmit={this.submit}>
            <label>
              Card details
              <CardElement
                onBlur={handleBlur}
                onChange={handleChange}
                onFocus={handleFocus}
                onReady={handleReady}
                {...createOptions(this.props.fontSize)}
              />
            </label>
            <button>Pay</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  transactions: state.entities.transactions
});

export default injectStripe(connect(mapStateToProps)(CheckoutForm));