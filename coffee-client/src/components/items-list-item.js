import React from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import { ListImage } from './images';

const Item = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 1em;
`;

const Name = styled('div')`
  color: ${props => props.theme.colors.secondary};
`;

function ItemsListItem (props) {

  const { Producer, picture, name, botanical_variety } = props.coffees[props.id];

  return (
    <Item>
      <Link to={{ pathname: `/coffee-detail/${props.id}`}} >
        <ListImage src={picture.url}/>
        <Name>{name}</Name>
        <div>{botanical_variety || 'Arabica'}</div>
        <div>{Producer.business_name || 'Some producer'}, {Producer.country || 'Interesting Country'}</div>
      </Link>
    </Item>
  )
}

export default ItemsListItem;