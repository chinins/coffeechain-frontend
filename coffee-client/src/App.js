import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';
import styled from 'react-emotion';
import { theme } from './shared/theme';
import './App.css';

import { connect } from 'react-redux';
import * as Actions from './redux/actions/actions';

const Paragraph = styled('p')`
  color: ${props => props.textColor ? props.textColor : props.theme.colors.primary};
  background: ${props => props.theme.colors.secondary};
  font-size: ${props => props.large ? '28px' : '14px'};
  font-family: ${props => props.theme.fontFamily};
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Paragraph large textColor="firebrick">Hi! This is my styled paragraph using emotion-theming :-)</Paragraph>
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
