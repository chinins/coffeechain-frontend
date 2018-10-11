import React from 'react';
import ItemsListItem from './items-list-item';
import ItemListCustomer from './item-list-customer';
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

function ItemsList(props) {
  const renderItems = () => {
    return props.result.map(itemId => {
      if (JSON.stringify(props.coffees) != '{}') {
        return (
          <ItemsListItem key={itemId} id={itemId} coffees={props.coffees} />
        );
      } else {
        return (
          <ItemListCustomer
            key={itemId}
            id={itemId}
            coffeeShops={props.coffeeShops}
          />
        );
      }
    });
  };

  return <List>{renderItems()}</List>;
}

export default ItemsList;
