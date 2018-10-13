import React from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';

const Item = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 1em;
`;

const Name = styled('div')`
  color: ${props => props.theme.colors.secondary};
`;

const Image = styled('img')`
  heigth: 22em;
  width: 22em;
  border-radius: ${props => props.theme.borderRadius};
`;

function ItemsListCustomer(props) {

  if (props.coffeeShop) {
    const { customer_name, country, pictures, description } = props.coffeeShop;
    return (
      <Item>
        <Link to={`/coffee-detail/${props.id}`}>
          <Image src={pictures.url} />
          <Name>{customer_name}</Name>
          <div>{country || 'Interesting Country'}</div>
        </Link>
      </Item>
    );
  } else return <Item/>;
}

export default ItemsListCustomer;
