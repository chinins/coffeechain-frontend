import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as CoffeeActions from '../../redux/actions/coffees';
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
          <CheckoutForm id = {this.id}> </CheckoutForm>
        </Elements>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  transactions: state.entities.transactions
});

export default connect(mapStateToProps)(Payment);
