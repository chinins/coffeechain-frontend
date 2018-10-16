import React, { Component } from 'react';
import styled, { css } from 'react-emotion';
import * as CoffeeActions from '../redux/actions/coffees';
import { connect } from 'react-redux';
import { InputButton } from './buttons';
import { Label, InputField, SelectInput, LabelSelect } from './input-fields';
import { producersIdArr } from '../constants/connections';

const Form = styled('form')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

class CoffeeForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      region: '',
      botanical_variety: '',
      altitude: '',
      preparation: 'dry',
      roast_appearance: '',
      price_kg: '',
      details: '',
      id: Math.round(Math.random() * 10e14)
    };
    this.randomProducerId = this.getRandomId(producersIdArr.length);
  }
  // temporary workaround authentication
  getRandomId (max) {
    return Math.floor(Math.random() * max);
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const producerId = producersIdArr[this.randomProducerId];
    this.props.createCoffee(this.state, producerId);
    setTimeout(
      () => this.props.history.push(`coffee-detail/${this.state.id}`),
      300
    );
  }

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name:
          <InputField
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleInput}
          />
        </Label>
        <Label>
          Region:
          <InputField
            name="region"
            type="text"
            value={this.state.region}
            onChange={this.handleInput}
          />
        </Label>
        <Label>
          Botanical Variety:
          <InputField
            name="botanical_variety"
            type="text"
            value={this.state.botanical_variety}
            onChange={this.handleInput}
          />
        </Label>
        <LabelSelect
          className={css`
            padding-left: 0px;
            padding-right: 20px;
          `}
        >
          Preparation:
          <SelectInput
            name="preparation"
            value={this.state.preparation}
            onChange={this.handleInput}
          >
            <option value="dry">Dry</option>
            <option value="wet">Wet</option>
          </SelectInput>
        </LabelSelect>
        <Label>
          Altitude:
          <InputField
            name="altitude"
            type="number"
            value={this.state.altitude}
            onChange={this.handleInput}
          />
        </Label>
        <Label>
          Roast Appearence:
          <InputField
            name="roast_appearance"
            type="text"
            value={this.state.roast_appearance}
            onChange={this.handleInput}
          />
        </Label>
        <Label>
          Price kg:
          <InputField
            name="price_kg"
            type="number"
            value={this.state.price_kg}
            onChange={this.handleInput}
          />
        </Label>
        <Label>
          Details:
          <InputField
            name="details"
            type="text"
            value={this.state.details}
            onChange={this.handleInput}
          />
        </Label>
        <InputButton type="submit" value="Submit" />
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createCoffee: (coffee, producerId) =>
    dispatch(CoffeeActions.createCoffee(coffee, producerId))
});

export default connect(
  null,
  mapDispatchToProps
)(CoffeeForm);
