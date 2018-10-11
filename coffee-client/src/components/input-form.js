import React, { Component } from 'react';
import styled from 'react-emotion';
import UserForm from './userform';
import CoffeeForm from './coffeeform';
import { ProfileImage } from './images';

const DisplayForm = styled('div')`
  display: flex;
  justify-content: space-around;
  margin-top: 3em;
`;


const profileImg = 'https://images.unsplash.com/photo-1534750487777-9104f274d8a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1eecc2018767296a7572fdc5467945fe&auto=format&fit=crop&w=800&q=60';
const coffeeFormImg = 'https://images.unsplash.com/photo-1532529202439-0312ecbf3ae9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5a4e16b5ce457ea41eadaffb945ac007&auto=format&fit=crop&w=800&q=60';

class InputForm extends Component {
  render () {
    let pathName = this.props.location.pathname;
    console.log(pathName)

    if (pathName === '/userForm') {
      return (
        <DisplayForm>
          <UserForm></UserForm>
          <ProfileImage src={profileImg}/>
        </DisplayForm>
      )
    } else if (pathName === '/coffeeForm') {
      return (
        <DisplayForm>
          <CoffeeForm></CoffeeForm>
          <ProfileImage src={coffeeFormImg}/>
        </DisplayForm>
      )
    }

  }
}

export default InputForm;
