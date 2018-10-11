import React, { Component } from 'react';
import styled from 'react-emotion';
import * as UserActions from '../redux/actions/users';
import { connect } from 'react-redux';
import { DefaultButton, InputButton } from './buttons';

const Form = styled('form')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


class UserForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      business_type: 'customer',
      business_name: '',
      country: '',
      email: '',
      description: '',
      details: ''
    }
  }

  handleInput = event => {
    this.setState({[event.target.name]:event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.business_type === 'customer') this.props.createCustomer(this.state.email);
    if (this.state.business_type === 'producer') this.props.createProducer(this.state.email);
    this.props.history.push('/');
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
      <DefaultButton>something</DefaultButton>
        <label>
          Business type:
          <select name="business_type" value={this.state.business_type} onChange={this.handleInput}>
            <option value="customer">Coffee Shop</option>
            <option value="producer">Coffee Producer</option>
          </select>
        </label>
        <label>
          Business name:
          <input name="business_name" type="text" value={this.state.business_name} onChange={this.handleInput} />
        </label>
        <label>
          Country:
          <input name="country" type="text" value={this.state.country} onChange={this.handleInput} />
        </label>
        <label>
          Email:
          <input name="email" type="text" value={this.state.email} onChange={this.handleInput} />
        </label>
        <label>
          Description:
          <input name="description" type="text" value={this.state.description} onChange={this.handleInput} />
        </label>

        <label>
          Details:
          <input name="details" type="text" value={this.state.details} onChange={this.handleInput} />
        </label>
        <input type="submit" value="Submit" />
        <DefaultButton>something</DefaultButton>
      </Form>
    )
  }

}

const mapDispatchToProps = (dispatch) => ({
  createCustomer: (customer) => dispatch(UserActions.createCoffeeShop(customer)),
  createProducer: (producer) => dispatch(UserActions.createProducer(producer))
})

export default connect(null, mapDispatchToProps)(UserForm);