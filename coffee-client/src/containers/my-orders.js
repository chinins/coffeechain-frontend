import React, { Component } from 'react';
import styled from 'react-emotion';
import OrdersListItem from '../components/orders-list-item';

import { connect } from 'react-redux';
import * as TransactionActions from '../redux/actions/transactions';
import * as CoffeeActions from '../redux/actions/coffees';

const customerId = 191408611206290; // hardcoded for demo

// hardcoded pictures for demo
const pictureHashes = [
  'https://ipfs.io/ipfs/QmfAmetYBjeDsAqCwqLs9s9khuwL2mTWgggtGKDQBLiVBH',
  'https://ipfs.io/ipfs/Qme6KbRC4seDpGMocQNyZgcrm3LiEQvw7P4oHiXCxuXjty',
  'https://ipfs.io/ipfs/QmNz5iqGbg9vD5v6p4N9Y6m443dE91uv77QsZhiaZx9H6Z'
];

const OrdersDashboard = styled('div')`
  max-width: 1100px;
  margin: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled('div')`
  font-size: 150%;
  margin-bottom: 30px;
`;

const OrdersList = styled('div')`
  display: flex;
`;


class MyOrders extends Component {

  componentDidMount () {
    this.props.getAllOrders(customerId);
  }

  renderItems = () => {
    let i = 0;
    return this.props.result.map(item => {
      return <OrdersListItem key={item} order={this.props.orders[item]} url={pictureHashes[i++]}/>;
    });
  };

  fetchPicture = (coffeeId) => {
    this.props.getCoffee(coffeeId);
  }

  render () {
    return (
      <OrdersDashboard>
        <Title>My Orders</Title>
        <OrdersList>
          {this.renderItems()}
        </OrdersList>
      </OrdersDashboard>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.entities.transactions,
  coffees: state.entities.coffees,
  result: state.pages.transactions.result
});

const mapDispatchToProps = dispatch => ({
  getAllOrders: customerId => dispatch(TransactionActions.getAllTransactions(customerId)),
  getCoffee: coffeeId => dispatch(CoffeeActions.getCoffee(coffeeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders);