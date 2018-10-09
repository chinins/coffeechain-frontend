import React, { Component } from 'react';
import styled from 'react-emotion';
import ItemsListItem from './items-list-item';
import Map from './map';

class ItemsList extends Component {
  arr = [1, 2, 3, 4, 5];

  renderItems = () => {
    return this.arr.map((item, key) => (
      <ItemsListItem key={key}></ItemsListItem>
    ));
  }

  render () {
    return (
      <div>
        <div>{this.renderItems()}</div>
        <Map></Map>
      </div>
    )
  }
}

export default ItemsList;
