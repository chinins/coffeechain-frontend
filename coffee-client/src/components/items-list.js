import React from 'react';
import ItemsListItem from './items-list-item';
import styled from 'react-emotion';

const List = styled('div')`
  display: flex;
  flex-wrap: wrap;
  width: 55%;
  margin-left: 1em;
  overflow-y: scroll;
`;

function ItemsList (props) {
  const renderItems = () => {
    return props.arr.map((item, key) => (
      <ItemsListItem key={key}></ItemsListItem>
    ));
  }

  return (
      <List>{renderItems()}</List>
  )
}

export default ItemsList;
