import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as TransactionActions from '../../redux/actions/transactions';
import { StripeProvider } from 'react-stripe-elements';
import Payment from './payment';

class Checkout extends Component {

  constructor (props) {
    super(props);
    this.id = this.props.match.params.id;
  }

  componentDidMount () {
    this.props.getTransaction(this.id);
  }

  render () {
    return (
      <div>
        <Payment id = {this.id}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  transactions: state.entities.transactions
});

const mapDispatchToProps = dispatch => ({
  getTransaction: transactionID => dispatch(TransactionActions.getTransaction(transactionID))
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
