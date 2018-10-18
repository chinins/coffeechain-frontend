import React, { Component } from 'react';
import styled from 'react-emotion';
import { secondary, accessory } from '../shared/colors';
import { Link } from 'react-router-dom';
import { LogoIcon } from './icons';

const ToolBar = styled('div')`
  display: flex;
  justify-content: space-between;
  height: 70px;
  border-bottom: solid 2px ${accessory};
  align-items: center;
  position: fixed;
  top: 0px;
  width: 100%;
  background: white;
`;

const AppName = styled('div')`
  font-size: 200%;
  margin: 10px 0 0 10px;
  color: ${props => props.theme.colors.secondary};
  font-weight: bold;
`;

const Navigation = styled('nav')`
  display: flex;
  justify-content: space-between;
  width: 35%;
  margin-right: 2em;
`;

const NavItem = styled('li')`
  list-style-type: none;
  height: 1.8em;
  :hover {
    border-bottom: solid 2px ${secondary};
    color: ${secondary};
  }
`;

const LogoTitle = styled('div')`
  display: flex;
  align-items: center;
`;

class Header extends Component {
  render () {
    return (
      <ToolBar>
        <LogoTitle>
          <LogoIcon/>
          <AppName>Coffee Chain</AppName>
        </LogoTitle>
        <Navigation>
          <NavItem>
            <Link to="/coffees">Coffees</Link>
          </NavItem>
          <NavItem>
            <Link to="/coffeeForm">Add coffee</Link>
          </NavItem>
          <NavItem>
            <Link to="/coffee-shops">Coffee shops</Link>
          </NavItem>
          <NavItem>
            <Link to="/producers">Producers</Link>
          </NavItem>
          <NavItem>
            <Link to="/orders">My Orders</Link>
          </NavItem>
          <NavItem>
            <Link to="/userForm">Profile</Link>
          </NavItem>
        </Navigation>
      </ToolBar>
    );
  }
}

export default Header;
