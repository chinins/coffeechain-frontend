import React, { Component } from 'react';
import styled from 'react-emotion';
import ItemsListItem from './items-list-item';

class ItemsList extends Component {
  arr = [1, 2, 3, 4, 5];

  renderItems = () => {
    return this.arr.map((item, key) => (
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
