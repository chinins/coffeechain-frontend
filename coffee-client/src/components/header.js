import React, { Component } from 'react';
import styled from 'react-emotion';
import { secondary, accessory } from '../shared/colors';

import { Link } from 'react-router-dom';

const ToolBar = styled('div')`
  display: flex;
  justify-content: space-between;
  height: 70px;
  border-bottom: solid 2px ${accessory};
  align-items: center;
`;

const AppName = styled('div')`
  font-size: 200%;
  margin: 10px 0 0 10px;
  color: ${props => props.theme.colors.secondary};
`;

const Navigation = styled('nav')`
  display: flex;
  justify-content: space-between;
  width: 30%;
  margin-right: 2em;
`;

const NavItem = styled('li')`
  list-style-type: none;
  :hover {
    border-bottom: solid 2px ${secondary};
    color: ${secondary};
  }
`;

class Header extends Component {
  render() {
    return (
      <ToolBar>
        <AppName>Coffee Chain</AppName>
        {/* <nav> */}
        <Navigation>
          <NavItem>
            <Link to="/coffees">Coffees</Link>
          </NavItem>
          <NavItem>
            <Link to="/">Add coffee</Link>
          </NavItem>
          <NavItem>
            <Link to="/coffeeForm">Add coffee</Link>
          </NavItem>
          <NavItem>
            <Link to="/">Add plantation</Link>
          </NavItem>
          <NavItem>
            <Link to="/coffee-shops">Coffee shops</Link>
          </NavItem>
          <NavItem>
            <Link to="/">Profile</Link>
          </NavItem>
          <NavItem>
            <Link to="/userForm">Create Profile</Link>
          </NavItem>
        </Navigation>
        {/* </nav> */}
      </ToolBar>
    );
  }
}

export default Header;
