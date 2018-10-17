import React, { Component } from 'react';
import styled from 'react-emotion';
import { ListImage } from './images';
import moment from 'moment';

const OrderBox = styled('div')`
  display: flex;
  justify-content: space-between;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  border: ${props => `solid 1px ${props.theme.colors.accessory}`};
  margin: 30px 10px;
  height: 15em;
`;

const DataBox = styled('div')`
  margin: 20px;
  width: 500px;
`;

const Item = styled('div')`
  display: flex;
  margin: 5px 0;
`;


const ItemLabel = styled('div')`
  margin-right: 10px;
`;

const ItemData = styled('div')`
  font-weight: bold;
`;

const OrderStatus = styled(ItemData)`
  font-size: 140%;
  color: ${ props => props.theme.colors.secondary }
`;

class OrdersListItem extends Component {

  CommaFormatted = amount => {
    return parseInt(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').split('.')[0];
  }

  render () {
    console.log(this.CommaFormatted(this.props.order.price));
    console.log('this.props.order.price: ', this.props.order.price);

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
        <DataBox>
          <Item>
            <OrderStatus>{status}</OrderStatus>
          </Item>
          <Item>
            <ItemLabel>Last update:</ItemLabel>
            <ItemData>{moment(this.props.order.updatedAt).fromNow()}</ItemData>
          </Item>
          <Item>
            <ItemLabel>Order ref:</ItemLabel>
            <ItemData>{this.props.order.id}</ItemData>
          </Item>
          <Item>
            <ItemLabel>Order quantity:</ItemLabel>
            <ItemData>{this.props.order.quantity} kg</ItemData>
          </Item>
          <Item>
            <ItemLabel>Coffee price:</ItemLabel>
            <ItemData>$ {this.CommaFormatted(this.props.order.price)}</ItemData>
          </Item>
          <Item>
            <ItemLabel>Order total:</ItemLabel>
            <ItemData>$ {this.CommaFormatted(this.props.order.total)}</ItemData>
          </Item>
        </DataBox>
        <ListImage src={this.props.url}></ListImage>
      </OrderBox>
    );
  }
}

export default OrdersListItem;
