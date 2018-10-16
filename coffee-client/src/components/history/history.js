import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as CoffeeActions from '../../redux/actions/coffees';
import { CoffeeBox, Hr, Title, Total, Order } from './history-style';


class history extends React.Component {

    // coffees bought on stripe 

  componentDidMount() {
    this.props.getCoffee(this.coffeeId);
  }

  render() {

    const { coffees } = this.props;
    const check = coffees[this.id];

    // coffeeBox

    let altitude = check && check.altitude;
    let business_name = check && check.Producer.business_name;
    let botanical_variety = check && check.botanical_variety;
    let name = check && check.name;

    return (
      <div>
        <Title> HISTORY </Title>
        <Total> TOTAL: $ 200 </Total>
        <Hr />
        <br />
        <div> 
        <Order > #ghjklmkl56789 <br /> Kg: 15 <br /> Paid: $200 </Order>
          <CoffeeBox>
            <b> SUMMARY </b> Producer : {business_name}
            <b /> Variety: {botanical_variety}
            <b /> Name: {name}
            <b /> Altitude: {altitude}
            <b /> Price: $ 200
        </CoffeeBox>
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  coffees: state.entities.coffees,
  result: state.pages.coffeeDetail.result
});

const mapDispatchToProps = dispatch => ({
  getCoffee: coffeeId => dispatch(CoffeeActions.getCoffee(coffeeId))
})

export default connect(mapStateToProps, mapDispatchToProps)(history);
