import React, { Component } from 'react';
import styled, { css } from 'react-emotion';
import * as CoffeeActions from '../redux/actions/coffees';
import { connect } from 'react-redux';
import { InputButton } from './buttons';
import { Label, InputField, SelectInput, LabelSelect } from './input-fields';

const Form = styled('form')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;


class CoffeeForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      region: '',
      botanical_variety: '',
      bean_screen: '',
      altitude: '',
      preparation: 'dry',
      roast_appearance: '',
      bean_density: '',
      price_kg: '',
      details: '',
    }
  }

  handleInput = event => {
    this.setState({[event.target.name]:event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.createCoffee(this.state);
    this.props.history.push('/offer-detail');
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name:
          <InputField name="name" type="text" value={this.state.name} onChange={this.handleInput} />
        </Label>
        <Label>
          Region:
          <InputField name="region" type="text" value={this.state.region} onChange={this.handleInput} />
        </Label>
        <Label>
          Botanical Variety:
          <InputField name="botanical_variety" type="text" value={this.state.botanical_variety} onChange={this.handleInput} />
        </Label>
        <LabelSelect className={css`
          padding-left: 0px;
          padding-right: 20px;
        `}>
          Preparation:
          <SelectInput name="preparation" value={this.state.preparation} onChange={this.handleInput}>
            <option value="dry">Dry</option>
            <option value="wet">Wet</option>
          </SelectInput>
        </LabelSelect>
        <Label>
          Altitude:
          <InputField name="altitude" type="number" value={this.state.altitude} onChange={this.handleInput} />
        </Label>
        <Label>
          Roast Appearence:
          <InputField name="roast_appearance" type="text" value={this.state.roast_appearance} onChange={this.handleInput} />
        </Label>
        <Label>
          Bean Screen:
          <InputField name="bean_screen" type="text" value={this.state.bean_screen} onChange={this.handleInput} />
        </Label>
        <Label>
          Bean density:
          <InputField name="bean_density" type="number" value={this.state.bean_density} onChange={this.handleInput} />
        </Label>
        <Label>
          Price kg:
          <InputField name="price_kg" type="number" value={this.state.price_kg} onChange={this.handleInput} />
        </Label>
        <Label>
          Details:
          <InputField name="details" type="text" value={this.state.details} onChange={this.handleInput} />
        </Label>
        <InputButton type="submit" value="Submit" />
      </Form>
    )
  }

}

const mapDispatchToProps = (dispatch) => ({
  createCoffee: (coffee) => dispatch(CoffeeActions.createCoffee(coffee))
})

export default connect(null, mapDispatchToProps)(CoffeeForm);