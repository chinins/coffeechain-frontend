import React, { Component } from 'react';
import styled from 'react-emotion';
import Map from '../components/map';
import ItemsList from '../components/items-list';
import FiltersList from '../components/filters-list';

const DashboardDiv = styled('div')`

`;



class Dashboard extends Component {
  arr = [1, 2, 3, 4, 5];

  render () {
    return (
      <div>
        <FiltersList/>
        {/* <DashboardDiv> */}
          <ItemsList arr={this.arr}></ItemsList>
          <Map></Map>
      {/* </DashboardDiv> */}
      </div>
    );
  };
}

export default Dashboard;