import React, { Component } from 'react';
import Map from '../components/map';
import ItemsList from '../components/items-list';
import FiltersList from '../components/filters-list';

import { connect } from 'react-redux';
import * as CoffeeActions from '../redux/actions/coffees';
import * as CoffeeShopActions from '../redux/actions/coffee-shop';

class Dashboard extends Component {
  componentDidMount() {
    const dashboardType = this.props.location.pathname;
    if (dashboardType === '/coffees' || dashboardType === '/') {
      this.props.getAllCoffees();
    } else if (dashboardType === '/coffee-shops') {
      this.props.getAllCoffeeShops();
    }
  }

  render() {
    return (
      <div>
        <FiltersList />
        <ItemsList
          result={this.props.result}
          coffees={this.props.coffees}
          coffeeShops={this.props.coffeeShops}
        />
        <Map />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  coffeeShops: state.entities.coffeeShops,
  coffees: state.entities.coffees,
  result: state.pages.dashboard.result
});

const mapDispatchToProps = dispatch => ({
  getAllCoffees: () => dispatch(CoffeeActions.getAllCoffees()),
  getAllCoffeeShops: () => dispatch(CoffeeShopActions.getAllCoffeeShops())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
