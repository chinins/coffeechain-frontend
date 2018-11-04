import React, { Component } from 'react';
import Map from '../components/map';
import ItemsList from '../components/items-list';
import FiltersList from '../components/filters-list';
import styled from 'react-emotion';
import { connect } from 'react-redux';
import * as CoffeeActions from '../redux/actions/coffees';
import * as CoffeeShopActions from '../redux/actions/coffee-shop';

const DashboardDiv = styled('div')`
  margin-top: 150px;
`;

class Dashboard extends Component {

  fetchData () {
    const { type } = this.props;
    if (type === 'coffees') {
      this.isCoffees = true;
      this.props.getAllCoffees();
    } else if (type === 'coffee-shops') {
      this.props.getAllCoffeeShops();
      this.isCoffees = false;
    }
  }

  componentDidMount () {
    this.fetchData();
  }


  componentDidUpdate (prevProps) {
    if (this.props.type !== prevProps.type) this.fetchData();

  }

  render () {
    return (
      <DashboardDiv>
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
      </DashboardDiv>
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
