import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as CoffeeActions from '../../redux/actions/coffees';
import { Elements } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';


class Payment extends Component {

  coffeeId = ':coffee_id';   // to change to passed url params later
  // coffeeId = this.props.match.params.coffeeId

  componentDidMount() {
    this.props.getCoffee(this.coffeeId);
  }

  // create a function for the price 

  id = 'ecedd2e7-c913-4250-a331-932c219c8000'    // to change later

  render() {

    return (
      <div>

        <h1> HELLO </h1>
        <Elements>
          <CheckoutForm> </CheckoutForm>
          </Elements>

      </div>
    )
  }
};

const mapStateToProps = state => ({
  coffees: state.entities.coffees,
  result: state.pages.coffeeDetail.result
});

const mapDispatchToProps = dispatch => ({
  getCoffee: coffeeId => dispatch(CoffeeActions.getCoffee(coffeeId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
