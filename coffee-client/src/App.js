import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import { connect } from 'react-redux';
import * as CoffeeActions from './redux/actions/coffees';

class App extends Component {
  render() {
    return (
      <div className="App">
        coffee-blockachain app
      </div>
    );
  }
}

// App.propTypes = {
//   getProducers: PropTypes.array
// };

const mapStateToProps = (state) => ({
  coffees: state.coffees,
  producer: state.producer,
  coffeeShop: state.coffeeShop,
});

const mapDispatchToProps = (dispatch) => ({
  getAllCoffees: () => dispatch(CoffeeActions.getAllCoffees()),
  getCoffee: (coffeeId) => dispatch(CoffeeActions.getCoffee(coffeeId)),
  createCoffee: () => dispatch(CoffeeActions.createCoffee())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
