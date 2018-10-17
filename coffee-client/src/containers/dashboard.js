import React, { Component } from 'react';
import Map from '../components/map';
import ItemsList from '../components/items-list';
import FiltersList from '../components/filters-list';

import { connect } from 'react-redux';
import * as CoffeeActions from '../redux/actions/coffees';
import * as CoffeeShopActions from '../redux/actions/coffee-shop';

class Dashboard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dashboardType: this.props.location.pathname
    };
  }

  fetchData () {
    const { dashboardType } = this.state;
    if (dashboardType === '/coffees' || dashboardType === '/') {
      this.isCoffees = true;
      this.props.getAllCoffees();
    } else if (dashboardType === '/coffee-shops') {
      this.props.getAllCoffeeShops();
      this.isCoffees = false;
    }
  }

  componentDidMount () {
    this.fetchData();
  }

  shouldComponentUpdate (nextProps) {
    if (this.state.dashboardType !== nextProps.location.pathname) {
      this.setState(
        { dashboardType: nextProps.location.pathname },
        this.fetchData
      );
      return true;
    }
    return true;
  }

  render () {
    return (
      <div>
        <FiltersList />
        <ItemsList
          result={this.props.result}
          coffees={this.props.coffees}
          coffeeShops={this.props.coffeeShops}
          isCoffees={this.isCoffees}
        />
        <Map
          data={this.isCoffees ? this.props.coffees : this.props.coffeeShops}
          result={this.props.result}
          isCoffees={this.isCoffees}
        />
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
