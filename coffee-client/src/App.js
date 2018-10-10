import React, { Component } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { theme } from './shared/theme';
import './shared/styles';
import Header from './components/header';
import Dashboard from './containers/dashboard';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import OfferDetail from './components/offer-detail';

import { connect } from 'react-redux';
import * as CoffeeActions from './redux/actions/coffees';

// const Paragraph = styled('p')`
//   color: ${props => props.textColor ? props.textColor : props.theme.colors.primary};
//   background: ${props => props.theme.colors.secondary};
//   font-size: ${props => props.large ? '28px' : '14px'};
// `;

class App extends Component {
  render()  {
    return (
      <ThemeProvider theme={theme}>
        <Router>
        <div className="App">
         
         <Header></Header>
         <Switch>
           <Route exact path='/' component={Dashboard} />
           <Route exact path='/offer-detail' component={OfferDetail} />
         </Switch>
        
       </div>
        </Router>
      </ThemeProvider>
    );
  }
}

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
