import React, { Component } from 'react';
import styled from 'react-emotion';

const Item = styled('div')`
  display: flex;
  flex-direction: column;
`;

const Name = styled('div')`
  color: ${props => props.theme.colors.secondary};
`;


function ItemsListItem (props) {
  const imageUrl = 'https://www.google.es/imgres?imgurl=https%3A%2F%2Fpreviews.123rf.com%2Fimages%2Famenic181%2Famenic1811701%2Famenic181170100073%2F68788804-coffee-tree-with-coffee-beans-on-coffee-plantation.jpg&imgrefurl=https%3A%2F%2Fwww.123rf.com%2Fphoto_68788804_coffee-tree-with-coffee-beans-on-coffee-plantation.html&docid=hhv9qlcfJUEI7M&tbnid=V3eC41rzyrxE2M%3A&vet=10ahUKEwiv8pOqyvfdAhXBBSwKHakyBx0QMwhyKAIwAg..i&w=1300&h=867&bih=656&biw=1429&q=coffee%20plantation&ved=0ahUKEwiv8pOqyvfdAhXBBSwKHakyBx0QMwhyKAIwAg&iact=mrc&uact=8';

  return (
    <Item>
      <img src={imageUrl}></img>
      <Name>Amaxing plantation Rica</Name>
      <div>Arabica</div>
      <div>Costa-Rica</div>
    </Item>
  )
}

export default ItemsListItem;