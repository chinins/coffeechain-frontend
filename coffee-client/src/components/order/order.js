import React, { Component } from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD:coffee-client/src/components/order.js
import { css } from 'react-emotion';
import * as CoffeeActions from '../redux/actions/coffees';
import * as TransactionsActions from '../redux/actions/transactions';
import * as EOSActions from '../redux/actions/eos';
import { InputButton } from './buttons';
import { Label, InputField } from './input-fields';
=======
import {css} from 'react-emotion';
import * as CoffeeActions from '../../redux/actions/coffees';
import { LightButtonSimple } from '../buttons';
import { Label, InputField } from '../input-fields';
>>>>>>> f81e5a61098a6f1cc824e7a1c607a2de36e2bda0:coffee-client/src/components/order/order.js
import { Form, CoffeeBox, Hr, Title, Total, Orderid } from './order-style';
import { Link } from 'react-router-dom';


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
  };

  handleSubmit = event => {
    event.preventDefault();
    const transaction = {};
    const id = Math.floor(Math.random() * 10e14);
    transaction.id = id;
    transaction.coffeeId = this.coffeeId;
    transaction.quantity = this.state.kg;
    transaction.price = this.props.coffees[this.coffeeId].price_kg;
    transaction.status_code = 1;
    transaction.total = this.state.kg * transaction.price;

    this.props.createTransaction(transaction, result => {
      this.props.eosSaleInitiate(id, this.coffeeId, this.state.kg, res => {
        this.props.history.push(`/checkout/${this.coffeeId}`);
      });
    });  
  };

  

  // create a function for the price

  render () {
    const { coffees } = this.props;
    const check = coffees[this.coffeeId];
    // coffeeBox
    const altitude = check && check.altitude;
    const business_name = check && check.producer && check.producer.business_name;
    const botanical_variety = check && check.botanical_variety;
    const name = check && check.name;
    const price = check && check.price_kg;
    const total = (parseInt(price) * this.state.kg) || 0;
    return (
<<<<<<< HEAD:coffee-client/src/components/order.js
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
=======
     <div> 
      <Title> ORDER </Title> 
      <Orderid> #ghjklmkl56789 </Orderid>

      <Total> TOTAL: $ 200 </Total>
      <Hr/>
      <br/>
    <Form onSubmit={this.handleSubmit}>
          <Label className={css` margin-left: 10%; margin-top: 0.5%;`}>
        <InputField name="kg" type="number" value={this.state.kg} onChange={this.handleInput} />
      </Label>
          <Label className={css` margin-left: 10%; margin-top: -2%;`} >
        <InputField name="notes" type="text" value={this.state.notes} onChange={this.handleInput} />
      </Label>
      <Link to={{ pathname: `/checkout` }} > 
          <LightButtonSimple type="submit" value="Order" className={css` margin-left: 11%`}> GO </LightButtonSimple> 
      </Link>
      <CoffeeBox> 
        <b> SUMMARY </b> Producer : {business_name} 
        <b/> Variety: {botanical_variety} 
        <b /> Name: {name}
        <b /> Altitude: {altitude}            
        <b /> Price: $ 200
        </CoffeeBox>
      </Form>
>>>>>>> f81e5a61098a6f1cc824e7a1c607a2de36e2bda0:coffee-client/src/components/order/order.js
      </div>
    );
  }
}

const mapStateToProps = state => ({
  coffees: state.entities.coffees,
  result: state.pages.coffeeDetail.result,
  transactions: state.entities.transactions
});

const mapDispatchToProps = dispatch => ({
  getCoffee: coffeeId => dispatch(CoffeeActions.getCoffee(coffeeId)),
  createTransaction: (transaction, onSuccess) =>
    dispatch(TransactionsActions.createTransaction(transaction, onSuccess)),
  eosSaleInitiate: (id, coffeeId, quantity, onSuccess) =>
    dispatch(EOSActions.eosSaleInitiate(id, coffeeId, quantity, onSuccess))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order);
