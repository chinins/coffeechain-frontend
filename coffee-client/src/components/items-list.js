import React, { Component } from 'react';
import styled from 'react-emotion';
import ItemsListItem from './items-list-item';
import Map from './map';

class ItemsList extends Component {
  renderItems = () => {
    return this.props.arr.map((item, key) => (
      <ItemsListItem key={key}></ItemsListItem>
    ));
  }

  render () {
    return (
        <div>{this.renderItems()}</div>
    )
  }
}

export default ItemsList;
