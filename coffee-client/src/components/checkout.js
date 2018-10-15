import React, { Component } from 'react';
import styled, { css } from 'react-emotion';
import { connect } from 'react-redux';
import * as CoffeeActions from '../redux/actions/coffees';
import { InputButton } from './buttons';
import { Label, InputField, SelectInput, LabelSelect } from './input-fields';

const Form = styled('form')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
`;

const Title = styled('div')`
  margin-top: 5%;
  margin-left: 10%;
  font-weight: 400;
  font-size: 1.9em;
`;

const Orderid = styled('div')`
  margin-top: -1.5%;
  margin-left: 17%;
  font-weight: 400;
  font-size: 1em;
`;

const Total = styled('div')`
  margin-top: -1.8%;
  margin-left: 51%;
  font-weight: 400;
  font-size: 1.5em;
`;

const Hr = styled('hr')`
  display: block;
  border: 0;
  width: 50%;
  margin-top: 2%;
  margin-left: 10%;
  margin-tbottom: 2%;
  border-top: 2px solid black;
`;

const CoffeeBox = styled('div')`
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
  height: 17%;
  width: 25%;
  position: absolute;
  letter-spacing: -0.5px;
  top: 26.8%;
  right: 40%;
  background-color: transparent;
  color: black;
  text-align: right;
`;


class Checkout extends Component {

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
       
        <form action="/createTransaction" method="POST">
          <script
            src="https://checkout.stripe.com/checkout.js" className ="stripe-button"
            data-key="pk_test_eaHxpZdwd2DYpjuAz4KpbGim"
            data-amount="999"
            data-name="coffechain"
            data-description="Example charge"
            data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
            data-locale="auto"
            data-currency="eur"
            data-zip-code="true">
          </script>
        </form>

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

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
