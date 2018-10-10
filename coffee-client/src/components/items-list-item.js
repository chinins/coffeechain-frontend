import React from 'react';
import styled from 'react-emotion';

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
  border-radius: ${props => props.theme.borderRadius}
`;

function ItemsListItem (props) {
  const imageUrl = 'https://images.unsplash.com/photo-1515694590185-73647ba02c10?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=481e2d607a5c95432531f461d318f728&auto=format&fit=crop&w=1500&q=80';

  return (
    <Item>
      <Image src={imageUrl}/>
      <Name>Amaxing plantation Rica</Name>
      <div>Arabica</div>
      <div>Costa-Rica</div>
    </Item>
  )
}

export default ItemsListItem;