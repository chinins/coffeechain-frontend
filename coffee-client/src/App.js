import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';
import { theme } from './shared/theme';
import './shared/styles';
import Header from './components/header';
import Dashboard from './containers/dashboard';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import * as Actions from './redux/actions/actions';

import CompVisual from './components/comp-visual';

// const Paragraph = styled('p')`
//   color: ${props => props.textColor ? props.textColor : props.theme.colors.primary};
//   background: ${props => props.theme.colors.secondary};
//   font-size: ${props => props.large ? '28px' : '14px'};
// `;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header></Header>
          <Route exact={true} path='/' render={() => <Dashboard/>} />
          {/* <Paragraph large textColor="firebrick">Hi! This is my styled paragraph using emotion-theming :-)</Paragraph> */}
          <CompVisual></CompVisual>
        </div>
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  getProducers: PropTypes.array
};

const mapStateToProps = (state) => ({
  producers: state.producers
});

const mapDispatchToProps = (dispatch) => ({
  setProducers: (producers) => dispatch(Actions.setProducers(producers))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
