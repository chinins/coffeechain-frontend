import React, { Component } from 'react';
import styled from 'react-emotion';

import { Link } from 'react-router-dom';

const ToolBar = styled('div')`
  display: flex;
  justify-content: space-between;
  height: 70px;
  background: lightblue;
`;

const Name = styled('div')`
  font-size: 200%;
  margin: 10px 0 0 10px;
  color: ${props => props.theme.colors.secondary}
`;

const Navigation = styled('nav')`
  display: flex;
  justify-content: space-around;
`;

const NavItem = styled('li')`
  list-style-type: none;
`;

class Header extends Component {
  render() {
    return (
      <ToolBar>
        <Name>Coffee Chain</Name>
        {/* <nav> */}
        <Navigation>
          <NavItem><Link to='/'>Coffee Types</Link></NavItem>
          <NavItem><Link to='/'>Add coffee</Link></NavItem>
          <NavItem><Link to='/'>Add plantation</Link></NavItem>
          <NavItem><Link to='/'>Coffee shops</Link></NavItem>
        </Navigation>
        {/* </nav> */}
      </ToolBar>
    )
  };
};

export default Header;
