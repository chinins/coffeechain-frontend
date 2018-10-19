import React from 'react';
import styled from 'react-emotion';
import { ListImage } from './images';
import { IPFS_URL } from '../constants/connections';

const Item = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 1em;
`;

const Name = styled('div')`
  color: ${props => props.theme.colors.secondary};
`;

function ItemsListCustomer (props) {

  if (props.coffeeShop) {
    const { customer_name, country, picture_hash } = props.coffeeShop;
    return (
      <Item>
        {<ListImage src={ IPFS_URL + picture_hash } />}
        <Name>{customer_name}</Name>
        <div>{country || 'Interesting Country'}</div>
      </Item>
    );
  } else return <Item />;
}

export default ItemsListCustomer;
