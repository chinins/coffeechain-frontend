import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css } from 'react-emotion';
import * as CoffeeActions from '../redux/actions/coffees';
import { InputButton } from './buttons';
import { Label, InputField } from './input-fields';
import { Form, CoffeeBox, Hr, Title, Total, Orderid } from './order-style';

class Order extends Component {
  constructor (props) {
    super(props);
    this.state = {
      kg: '',
      total: '',
      notes: ''
    };
    this.coffeeId = ':coffee_id'; // to change to passed url params later - coffeeId = this.props.match.params.coffeeId
    this.id = 'ecedd2e7-c913-4250-a331-932c219c8000'; // to change later
  }

  componentDidMount () {
    this.props.getCoffee(this.coffeeId);
  }

  handleInput (event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // for later:

  // handleSubmit = event => {
  //   event.preventDefault();
  //   this.props.createTransaction(this.price);
  //   this.props.history.push('order/:id_order');
  // }

  // create a function for the price

  render () {
    const { coffees } = this.props;
    const check = coffees[this.id];

    // coffeeBox

    let altitude = check && check.altitude;
    let business_name = check && check.Producer.business_name;
    let botanical_variety = check && check.botanical_variety;
    let name = check && check.name;

    return (
      <div>
        <Title> ORDER </Title>
        <Orderid> #ghjklmkl56789 </Orderid>
        <Total> TOTAL: $ 200 </Total>
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
            <n /> Variety: {botanical_variety}
            <n /> Name: {name}
            <n /> Altitude: {altitude}
            <n /> Price: $ 200
          </CoffeeBox>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  coffees: state.entities.coffees,
  result: state.pages.coffeeDetail.result
});

const mapDispatchToProps = dispatch => ({
  getCoffee: coffeeId => dispatch(CoffeeActions.getCoffee(coffeeId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order);
