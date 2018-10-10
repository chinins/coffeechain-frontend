import React, { Component } from 'react';
import Map from '../components/map';
import ItemsList from '../components/items-list';
import FiltersList from '../components/filters-list';

import { connect } from 'react-redux';
import * as CoffeeActions from '../redux/actions/coffees';

class Dashboard extends Component {
  // arr = [1, 2, 3, 4, 5];

  componentDidMount () {
    this.props.getAllCoffees();
  }


  render () {
    return (
      <div>
        <FiltersList/>
          <ItemsList result={this.props.result} coffees={this.props.coffees}></ItemsList>
          <Map></Map>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  coffees: state.entities.coffees,
  result: state.pages.dashboard.result,
});

const mapDispatchToProps = (dispatch) => ({
  getAllCoffees: () => dispatch(CoffeeActions.getAllCoffees())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);