import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import { connect } from 'react-redux';
import * as Actions from './redux/actions/actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        coffee-blockachain app
      </div>
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
