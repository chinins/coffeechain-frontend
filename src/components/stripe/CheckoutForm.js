import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardElement, injectStripe } from 'react-stripe-elements';
import * as TransactionActions from './../../redux/actions/transactions';
import { DefaultButton } from '../buttons';
import { BASE_URL } from '../../constants/connections';
import './stripe-style.css';

class CheckoutForm extends Component {
  constructor (props) {
    super(props);
    this.transactionId = this.props.id;
  }

  componentDidMount () {
    this.props.getTransaction(this.transactionId);
  }

  submit = async ev => {
    ev.preventDefault();
    let token = await this.props.stripe.createToken();
    token.token.transactionId = this.transactionId;
    token.token.amount = this.props.transactions[this.transactionId].total;
    let response = await fetch(`${BASE_URL}/charge`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(token.token)
    });

    if (response.ok) this.props.history.push('/orders');
  };

  render () {
    let amount = '';
    if (this.props.transactions && this.props.transactions[this.transactionId]) amount = this.props.transactions[this.transactionId].total;
    const text = 'Amount to pay: ' + amount + ' $  ';

    return (
      <div>
        <div className="checkout"> CHECKOUT </div>
        <span className="Hr"> </span>
        <div className="background-col">
          <form onSubmit={this.submit}>
            <label>
              Card details
              <CardElement {...createOptions(this.props.fontSize)} />
            </label>
            <label>{text}</label>
            <DefaultButton>Pay</DefaultButton>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  transactions: state.entities.transactions
});

const mapDispatchToProps = dispatch => ({
  getTransaction: transactionId => dispatch(TransactionActions.getTransaction(transactionId)),
});

const createOptions = (fontSize, padding) => {
  return {
    style: {
      base: {
        fontSize,
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Source Code Pro, monospace',
        '::placeholder': {
          color: '#aab7c4'
        },
        padding
      },
      invalid: {
        color: '#9e2146'
      }
    }
  };
};

export default injectStripe(connect(mapStateToProps, mapDispatchToProps) (CheckoutForm));
