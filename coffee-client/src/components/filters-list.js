import styled from 'react-emotion';
import React, { Component } from 'react';
import { primary, secondary, accessory } from '../shared/colors';
import { LightButtonSimple } from './buttons';


const List = styled('div')`
  position: relative;
  display: flex;
  align-items: center;
  margin: auto;
  height: 5em;
  margin-bottom: 2em;
  border-bottom: solid 2px ${accessory};
  padding-left: 50px;
`;

class FiltersList extends Component {
  render () {
    return (
     <List>
      <LightButtonSimple>Country</LightButtonSimple>
      <LightButtonSimple>Variety</LightButtonSimple>
      <LightButtonSimple>Region</LightButtonSimple>
      <LightButtonSimple>Producer</LightButtonSimple>
      <LightButtonSimple>Altitude</LightButtonSimple>
      <LightButtonSimple>Density</LightButtonSimple>
     </List>
    )
  }
}

export default FiltersList;