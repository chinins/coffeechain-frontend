import React, { Component } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { theme } from './shared/theme';
import './shared/styles';
import Header from './components/header';
import Dashboard from './containers/dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CoffeeDetail from './containers/coffee-detail';
import Order from './components/order';
import Checkout from './components/stripe/checkout';
import Payment from './components/stripe/payment';
import MyOrders from './containers/my-orders';

import { connect } from 'react-redux';
import * as CoffeeActions from './redux/actions/coffees';
import LoadingBar from 'react-redux-loading-bar';
import InputForm from './components/input-form';
import { secondary } from './shared/colors';

class App extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <LoadingBar style={{ zIndex: 100, backgroundColor: `${secondary}`, height: '10px' }} />
            <Header />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/coffees" component={Dashboard} />
              <Route exact path="/coffee-shops" component={Dashboard} />
              <Route exact path="/coffee-detail/:coffeeId" component={CoffeeDetail} />
              <Route exact path="/order/:coffeeId" component={Order} />
              <Route exact path="/coffeeForm" component={InputForm} />
              <Route exact path="/userForm" component={InputForm} />
              <Route exact path='/checkout/:id' component={Checkout} />
              <Route exact path='/payment' component={Payment} />
              <Route exact path="/orders" component={MyOrders} />
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  coffees: state.coffees,
  producer: state.producer,
  coffeeShop: state.coffeeShop
});

const mapDispatchToProps = dispatch => ({
  getAllCoffees: () => dispatch(CoffeeActions.getAllCoffees()),
  getCoffee: coffeeId => dispatch(CoffeeActions.getCoffee(coffeeId)),
  createCoffee: () => dispatch(CoffeeActions.createCoffee())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
