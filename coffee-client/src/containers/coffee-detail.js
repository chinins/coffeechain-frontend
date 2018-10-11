import React, { Component } from 'react';
import styled from 'react-emotion';
import MapDetail from '../components/map-detail';
import { connect } from 'react-redux';
import * as CoffeeActions from '../redux/actions/coffees';
const plantationPic = require('../assets/images/plantations/costa_rica.jpg');

const Div = styled('div')`
  font-family: avenir next;
  color: black;
`;

  const Location = styled('div')`
  position: absolute;
  font-weight: 300;
  font-size: 1.3em;
  letter-spacing: -2px;
  top: 51%;
  left: 5%;
`;

const Company = styled('div')`
  position: absolute;
  font-weight: 600;
  font-size: 1.7em;
  letter-spacing: -2px;
  top: 12%;
  left: 5%;
`;

const ThirdTitle = styled('div')`
  position: absolute;
  font-weight: 220;
  font-size: 1.1em;
  letter-spacing: -1px;
  right: 7%;
  top: 7%;
`;

const Subtitle = styled('div')`
  position: absolute;
  font-weight: 400;
  font-size: 1.3em;
  letter-spacing: -2px;
  top: 7%;
  left: 5%;
`;

const Paragraph = styled('p')`
  font-weight: 400;
  font-size: 1em;
  line-height: 1.2;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: ${props => props.top};
`;

const CoffeeBox = styled('div')`
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
  height: 30%;
  width: 52%;
  position: absolute;
  letter-spacing: -0.5px;
  top: 17%;
  left: 5%;
  background-color: white;
`;

const ReviewBox = styled('div')`
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
  height: 30%;
  width: 50%;
  position: absolute;
  letter-spacing: -0.5px;
  bottom: 11%;
  right: 5%;
  background-color: white;
`;

const ImageFormat = styled('div')`
  position: absolute;
  top: 16%;
  left: 60%;
  width: 38%;
`;


class CoffeeDetail extends Component {
  coffeeId= ':coffee_id';   // to change to passed url params later

  componentDidMount () {
    this.props.getCoffee(this.coffeeId);
  }

  render() {
    return (
      <Div>

        <ImageFormat>   <img src={plantationPic} alt= "plantation" /></ImageFormat>
        <Company> JUAN VALDEZ </Company>

        <CoffeeBox>

          <Subtitle> Coffea Canephora</Subtitle>
          <ThirdTitle> PRICE - $ 200 </ThirdTitle>

          <Paragraph top = '7%'> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
          nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
          sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
           Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
           ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
           consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
           </Paragraph>

        </CoffeeBox>

        <Location> COLOMBIA, BOGOTA </Location>

        <MapDetail></MapDetail>

        <ReviewBox>
          <Subtitle> Reviews </Subtitle>
           <ThirdTitle> AVERAGE - * 4.7 </ThirdTitle>
          <Paragraph top='7%'> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasiem ullam corporis suscipit laboriosam, nisi ut aliquid ex
consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
           </Paragraph>
          <Paragraph top='2%'> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasiem ullam corporis suscipit laboriosam, nisi ut aliquid ex
consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
           </Paragraph>
          <Paragraph top='2%'> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasiem ullam corporis suscipit laboriosam, nisi ut aliquid ex
consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
           </Paragraph>
            </ReviewBox>

      </Div>
    )
  }
}

const mapStateToProps = state => ({
  coffees: state.entities.coffees,
  result: state.pages.coffeeDetail.result
});

const mapDispatchToProps = dispatch => ({
  getCoffee: coffeeId => dispatch(CoffeeActions.getCoffee(coffeeId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeDetail);
