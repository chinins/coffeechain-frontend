import React, { Component } from 'react';
import styled from 'react-emotion';
import * as CoffeeActions from '../redux/actions/coffees';
import { connect } from 'react-redux';

const Form = styled('form')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


class CoffeeForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      region: '',
      botanical_variety: '',
      bean_screen: '',
      altitude: 0,
      preparation: 'dry',
      roast_appearance: '',
      bean_density: 0,
      price_kg: 0,
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
        <label>
          Name:
          <input name="name" type="text" value={this.state.name} onChange={this.handleInput} />
        </label>
        <label>
          Region:
          <input name="region" type="text" value={this.state.region} onChange={this.handleInput} />
        </label>
        <label>
          Botanical Variety:
          <input name="botanical_variety" type="text" value={this.state.botanical_variety} onChange={this.handleInput} />
        </label>
        <label>
          Preparation:
          <select name="preparation" value={this.state.preparation} onChange={this.handleInput}>
            <option value="dry">Dry</option>
            <option value="wet">Wet</option>
          </select>
        </label>
        <label>
          Altitude:
          <input name="altitude" type="number" value={this.state.altitude} onChange={this.handleInput} />
        </label>
        <label>
          Roast Appearence:
          <input name="roast_appearance" type="text" value={this.state.roast_appearance} onChange={this.handleInput} />
        </label>
        <label>
          Bean Screen:
          <input name="bean_screen" type="text" value={this.state.bean_screen} onChange={this.handleInput} />
        </label>
        <label>
          Bean density:
          <input name="bean_density" type="number" value={this.state.bean_density} onChange={this.handleInput} />
        </label>
        <label>
          Price kg:
          <input name="price_kg" type="number" value={this.state.price_kg} onChange={this.handleInput} />
        </label>
        <label>
          Details:
          <input name="details" type="text" value={this.state.details} onChange={this.handleInput} />
        </label>
        <input type="submit" value="Submit" />
      </Form>
    )
  }

}

const mapDispatchToProps = (dispatch) => ({
  createCoffee: (coffee) => dispatch(CoffeeActions.createCoffee(coffee))
})

export default connect(null, mapDispatchToProps)(CoffeeForm);