import React, { Component } from 'react';
import styled from 'react-emotion';
import Map from '../components/map';
import ItemsList from '../components/items-list';

const DashboardDiv = styled('div')`
  display: flex;
`;

class Dashboard extends Component {
  arr = [1, 2, 3, 4, 5];

  render () {
    return (
      <DashboardDiv>
        <ItemsList arr={this.arr}></ItemsList>
        <Map></Map>
      </DashboardDiv>
    );
  };
}

export default Dashboard;