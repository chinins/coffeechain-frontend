import React, { Component } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { theme } from './shared/theme';
import './shared/styles';
import Header from './components/header';
import Dashboard from './containers/dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CoffeeDetail from './containers/coffee-detail';
import Order from './components/order';
import Checkout from './components/checkout';

import { connect } from 'react-redux';
import * as ScatterActions from './redux/actions/scatter';
import LoadingBar from 'react-redux-loading-bar';
import InputForm from './components/input-form';
import { secondary } from './shared/colors';

import { InputButton } from './components/buttons';
import { Form } from './components/order-style';

import { EOSIO_CONFIG } from './constants/connections';
import EOS from 'eosjs';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      scatterLoaded: false
    };
  }

  componentDidMount () {
    document.addEventListener('scatterLoaded', () => {
      const scatter = window.scatter;
      window.scatter = null;
      scatter
        .getIdentity({
          accounts: [EOSIO_CONFIG.network]
        })
        .then(identity => {
          this.props.storeIdentity(identity);
          this.props.scatterLogin(true);
        })
        .catch(err => {
          this.props.scatterLogin(false);
          //eslint-disable-next-line
          console.error(err);
        });
      const eosClient = scatter.eos(
        EOSIO_CONFIG.network,
        EOS,
        EOSIO_CONFIG.eosOptions,
        EOSIO_CONFIG.network.protocol
      );
      this.props.storeEOSClient(eosClient);
      this.props.storeScatter(scatter);
      this.setState({
        scatterLoaded: true
      });
    });
  }

  render () {
    if (this.props.authenticated) return this.renderApp();
    else return <p>You need to allow Scatter!</p>;
    // TODO: some styling, it's a bit sad here
  }

  renderApp () {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <LoadingBar
              style={{
                zIndex: 100,
                backgroundColor: `${secondary}`,
                height: '10px'
              }}
            />
            <Header />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/coffees" component={Dashboard} />
              <Route exact path="/coffee-shops" component={Dashboard} />
              <Route
                exact
                path="/coffee-detail/:coffeeId"
                component={CoffeeDetail}
              />
              <Route exact path="/order/:coffeeId" component={Order} />
              <Route exact path="/coffeeForm" component={InputForm} />
              <Route exact path="/userForm" component={InputForm} />
              <Route exact path="/checkout" component={Checkout} />
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.authentication.authenticated
});

const mapDispatchToProps = dispatch => ({
  storeEOSClient: eosClient =>
    dispatch(ScatterActions.storeEOSClient(eosClient)),
  storeIdentity: identity => dispatch(ScatterActions.storeIdentity(identity)),
  storeScatter: scatter => dispatch(ScatterActions.storeScatter(scatter)),
  scatterLogin: authenticated =>
    dispatch(ScatterActions.scatterLogin(authenticated))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
