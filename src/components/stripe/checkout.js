import React, { Component } from 'react';
import Payment from './payment';
import { css } from 'react-emotion';

class Checkout extends Component {

  constructor (props) {
    super(props);
    this.id = this.props.match.params.id;
  }

  render () {
    return (
      <div className={css`
        margin-top: 160px;
      `}>
        <Payment history={this.props.history} id={this.id}/>
      </div>
    );
  }
}

export default Checkout;
