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

const Hr = styled ('hr') `
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


class Order extends Component {

  constructor(props) {
    super(props);
    this.state = {
      kg: '',
      total: '',
      notes: ''
    }
  }

  coffeeId = ':coffee_id';   // to change to passed url params later
  // coffeeId = this.props.match.params.coffeeId

  componentDidMount() {
    this.props.getCoffee(this.coffeeId);
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  // handleSubmit = event => {
  //   event.preventDefault();
  //   this.props.createTransaction(this.price);
  //   this.props.history.push('order/:id_order');
  // }

  // create a function for the price 

  id = 'ecedd2e7-c913-4250-a331-932c219c8000'    // to change later

  render() {

    const { coffees } = this.props;

    // coffeeBox

    let altitude = coffees[this.id] && coffees[this.id].altitude;
    let bean_density = coffees[this.id] && coffees[this.id].bean_density;
    let business_name = coffees[this.id] && coffees[this.id].Producer.business_name;
    let botanical_variety = coffees[this.id] && coffees[this.id].botanical_variety;
    let name = coffees[this.id] && coffees[this.id].name;
    let roast_appearance = coffees[this.id] && coffees[this.id].roast_appearance;
    let preparation = coffees[this.id] && coffees[this.id].preparation;
    let rating = coffees[this.id] && coffees[this.id].rating;

    return (
    <div> 
        <Title> ORDER </Title> 
        <Orderid> #ghjklmkl56789 </Orderid>
        <Total> TOTAL: $ 200 </Total>
        <Hr/>
        <br/>
      <Form onSubmit={this.handleSubmit}>
        <Label>
           kg:
          <InputField name="kg" type="number" value={this.state.kg} onChange={this.handleInput} />
        </Label>
        <Label>
          notes:
          <InputField name="notes" type="text" value={this.state.notes} onChange={this.handleInput} />
        </Label>
        <InputButton type="submit" value="Submit" className={css`
          margin-left: 15%;
          margin-top: 2%;
        `} />
          <CoffeeBox> 
            <b> SUMMARY </b> 
            Producer : {business_name} 
            <n/>
            Variety: {botanical_variety} 
            <n />
            Name: {name}
            <n />
            Altitude: {altitude}            
            <n />
            Price: $ 200
            
            </CoffeeBox>
      </Form>

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

export default connect(mapStateToProps, mapDispatchToProps)(Order);
