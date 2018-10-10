import React from 'react';
import ItemsListItem from './items-list-item';

function ItemsList (props) {
  const renderItems = () => {
    return props.arr.map((item, key) => (
      <ItemsListItem key={key}></ItemsListItem>
    ));
  }

  return (
      <div>{renderItems()}</div>
  )
}

export default ItemsList;
