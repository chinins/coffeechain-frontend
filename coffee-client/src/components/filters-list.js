import styled from 'react-emotion';
import React, { Component } from 'react';
import { accessory } from '../shared/colors';
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

const list = [
  'Country',
  'Variety',
  'Region',
  'Producer',
  'Altitude',
  'Density'
];

function FiltersList () {
    return (
     <List>
       { list.map((item, key) => <LightButtonSimple key={key}>{item}</LightButtonSimple>)}
     </List>
    )
};

export default FiltersList;