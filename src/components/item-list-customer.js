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
  const url =
    'https://images.unsplash.com/photo-1527018263374-5adb6a54f01e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=76ac2e56cf4887aac218a89543847865&auto=format&fit=crop&w=800&q=60';

  if (props.coffeeShop) {
    const { customer_name, country, pictures, picture_hash } = props.coffeeShop;
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
