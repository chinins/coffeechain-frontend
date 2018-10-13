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

function ItemsListCoffee(props) {

  if (props.coffee) {
    const { Producer, picture, name, botanical_variety } = props.coffee;
    return (
      <Item>
        <Link to={`/coffee-detail/${props.id}`}>
          <Image src={picture.url} />
          <Name>{name}</Name>
          <div>{botanical_variety || 'Arabica'}</div>
          <div>
            {Producer.business_name || 'Some producer'},{' '}
            {Producer.country || 'Interesting Country'}
          </div>
        </Link>
      </Item>
    );
  } else return <Item/>
}

export default ItemsListCoffee;
