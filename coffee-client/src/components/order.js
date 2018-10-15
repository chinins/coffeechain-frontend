import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'react-emotion';
import * as CoffeeActions from '../redux/actions/coffees';
import * as TransactionsActions from '../redux/actions/transactions';
import { InputButton } from './buttons';
import { Label, InputField } from './input-fields';
import { Form, CoffeeBox, Hr, Title, Total, Orderid } from './order-style';

class Order extends Component {
  constructor (props) {
    super(props);
    this.state = {
      kg: 0,
      notes: ''
    };
    this.coffeeId = this.props.match.params.coffeeId;
  }

  componentDidMount () {
    this.props.getCoffee(this.coffeeId);
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  // for later:

  handleSubmit = event => {
    event.preventDefault();
    const transaction = {};
    transaction.uuid = Math.floor(Math.random()*10e14);
    transaction.uuid_coffee = this.coffeeId;
    transaction.buyer = 'adriapalleja';
    transaction.quantity = this.state.kg;
    transaction.price = this.props[this.coffeeId].price_kg;
    transaction.total = transaction.price * transaction.quantity;
    this.props.createTransaction(transaction);
    // this.props.history.push('order/:id_order');
  }

  // create a function for the price

  render () {
    const { coffees } = this.props;
    const check = coffees[this.coffeeId];

    // coffeeBox

    const altitude = check && check.altitude;
    const business_name = check && check.producer.business_name;
    const botanical_variety = check && check.botanical_variety;
    const name = check && check.name;
    const price = check && check.price_kg;
    const total = price * this.state.kg;
    return (
      <div>
        <Title> ORDER </Title>
        <Orderid> Order #{this.coffeeId} </Orderid>
        <Total> TOTAL: $ {total} </Total>
        <Hr />
        <br />
        <Form onSubmit={this.handleSubmit}>
          <Label>
            kg:
            <InputField
              name="kg"
              type="number"
              value={this.state.kg}
              onChange={this.handleInput}
            />
          </Label>
          <Label>
            notes:
            <InputField
              name="notes"
              type="text"
              value={this.state.notes}
              onChange={this.handleInput}
            />
          </Label>
          <InputButton
            type="submit"
            value="Submit"
            className={css`
              margin-left: 15%;
              margin-top: 2%;
            `}
          />
          <CoffeeBox>
            <b> SUMMARY </b> Producer : {business_name}
            <br /> Variety: {botanical_variety}
            <br /> Name: {name}
            <br /> Altitude: {altitude}
            <br /> Price: $ {price}
          </CoffeeBox>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  coffees: state.entities.coffees,
  result: state.pages.coffeeDetail.result,
  transactions: state.entites.transactions,
});

const mapDispatchToProps = dispatch => ({
  getCoffee: coffeeId => dispatch(CoffeeActions.getCoffee(coffeeId)),
  createTransaction: (transaction,coffeeId) => dispatch(TransactionsActions.createTransaction(transaction,coffeeId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order);
