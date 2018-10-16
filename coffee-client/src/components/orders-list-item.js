import React, { Component } from 'react';
import styled from 'react-emotion';
import { ListImage } from './images';

const OrderBox = styled('div')`
  display: flex;
  flex-direction: column;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  border: ${props => `solid 1px ${props.theme.colors.accessory}`};
  margin: 0 10px;
`;

const Item = styled('div')`
  display: flex;

`;


const ItemLabel = styled('div')`

`;

const ItemData = styled('div')`

`;

const OrderStatus = styled('ItemData')`
  font-size: 140%;
  color: ${ props => props.theme.colors.secondary }
`;

class OrdersListItem extends Component {

  render () {
    const statusCode = this.props.order.status_code;
    let status;
    if (statusCode === 1) {
      status = 'Order confirmed, payment blocked';
    } else if (statusCode === 2) {
      status = 'Order shipped';
    } else if (statusCode === 3) {
      status = 'Order received, payment transferred';
    }
    return (
      <OrderBox>
        <ListImage src={this.props.url}></ListImage>
        <Item>
          <OrderStatus>{status}</OrderStatus>
        </Item>
        <Item>
          <ItemLabel>Order ref:</ItemLabel>
          <ItemData>{this.props.order.id}</ItemData>
        </Item>
        <Item>
          <ItemLabel>Order quantity:</ItemLabel>
          <ItemData>{this.props.order.quantity}</ItemData>
        </Item>
        <Item>
          <ItemLabel>Coffee price:</ItemLabel>
          <ItemData>{this.props.order.price}</ItemData>
        </Item>
        <Item>
          <ItemLabel>Order total, $:</ItemLabel>
          <ItemData>{this.props.order.total}</ItemData>
        </Item>
      </OrderBox>
    );
  }
}

export default OrdersListItem;
