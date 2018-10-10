import styled from 'react-emotion';
import React, { Component } from 'react';
import { primary, secondary, accessory } from '../shared/colors';


const List = styled('div')`
  position: relative;
  display: flex;
  width: 80%;
  margin: auto;
  height: 5em;
  margin-bottom: 2em;
  background: lightblue;
  border-bottom: solid 2px ${accessory};
`;

class FiltersList extends Component {
  render () {
    return (
     <List>different filters</List>
    )
  }
}

export default FiltersList;