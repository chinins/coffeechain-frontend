import React from 'react';
import ItemsListCoffee from './items-list-coffee';
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
      if (Object.keys(props.coffees).length > 0 && props.isCoffees) {
        return (
          <ItemsListCoffee key={itemId} id={itemId} coffee={props.coffees[itemId]} />
        );
      } else if (Object.keys(props.coffeeShops).length > 0 && !props.isCoffees) {
        return (
          <ItemListCustomer key={itemId} id={itemId} coffeeShop={props.coffeeShops[itemId]}/>
        );
      } else return;
    });
  };

  return <List>{renderItems()}</List>;
}

export default ItemsList;
