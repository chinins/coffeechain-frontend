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

  handleRegion = event => {
    this.setState({region: event.target.value});
  }

  handleBotanicalVariety = event => {
    this.setState({botanical_variety: event.target.value});
  }

  handleRoastAppearance = event => {
    this.setState({roast_appearance: event.target.value});
  }

  handleName = event => {
    this.setState({name: event.target.value});
  }

  handleDetails = event => {
    this.setState({details: event.target.value});
  }

  handleAltitude = event => {
    this.setState({altitude: event.target.value});
  }

  handleBeanDensity = event => {
    this.setState({bean_density: event.target.value});
  }

  handleBeanScreen = event => {
    this.setState({bean_screen: event.target.value});
  }

  handlePriceKg = event => {
    this.setState({price_kg: event.target.value});
  }

  handlePreparation = event => {
    this.setState({preparation: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.createCoffee(this.state);
    this.props.history.push('/');
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleName} />
        </label>
        <label>
          Region:
          <input type="text" value={this.state.region} onChange={this.handleRegion} />
        </label>
        <label>
          Botanical Variety:
          <input type="text" value={this.state.botanical_variety} onChange={this.handleBotanicalVariety} />
        </label>
        <label>
          Preparation:
          <select value={this.state.preparation} onChange={this.handlePreparation}>
            <option value="dry">Dry</option>
            <option value="wet">Wet</option>
          </select>
        </label>
        <label>
          Altitude:
          <input type="number" value={this.state.altitude} onChange={this.handleAltitude} />
        </label>
        <label>
          Roast Appearence:
          <input type="text" value={this.state.roast_appearance} onChange={this.handleRoastAppearance} />
        </label>
        <label>
          Bean Screen:
          <input type="text" value={this.state.bean_screen} onChange={this.handleBeanScreen} />
        </label>
        <label>
          Bean density:
          <input type="number" value={this.state.bean_density} onChange={this.handleBeanDensity} />
        </label>
        <label>
          Price kg:
          <input type="number" value={this.state.price_kg} onChange={this.handlePriceKg} />
        </label>
        <label>
          Details:
          <input type="text" value={this.state.details} onChange={this.handleDetails} />
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