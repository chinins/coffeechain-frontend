import React from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';
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

function ItemsListCoffee (props) {

  if (props.coffee) {
    const { producer, name, botanical_variety, picture_hash } = props.coffee;
    return (
      <Item>
        <Link to={`/coffee-detail/${props.id}`}>
          <ListImage src={ IPFS_URL + picture_hash } />
          <Name>{name}</Name>
          <div>{botanical_variety || 'Arabica'}</div>
          <div>
            {producer.business_name || 'Some producer'},{' '}
            {producer.country || 'Interesting Country'}
          </div>
        </Link>
      </Item>
    );
  } else return <Item />;
}

export default ItemsListCoffee;
