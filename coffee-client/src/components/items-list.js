import React from 'react';
import ItemsListItem from './items-list-item';
import styled from 'react-emotion';

const List = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 55%;
  max-height: 700px;
  min-height: 500px;
  margin-left: 1em;
  overflow: hidden;
  overflow-y: scroll;
`;

function ItemsList (props) {
  const renderItems = () => {
    return props.result.map(itemId => {
      return <ItemsListItem key={itemId} id={itemId} coffees={props.coffees}></ItemsListItem>
    });
  }

  return (
      <List>{renderItems()}</List>
  )
}

export default ItemsList;
