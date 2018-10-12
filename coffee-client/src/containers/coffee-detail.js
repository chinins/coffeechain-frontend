import React, { Component } from 'react';
import styled from 'react-emotion';
import MapDetail from '../components/map-detail';
import { connect } from 'react-redux';
import * as CoffeeActions from '../redux/actions/coffees';
import { DefaultButton } from '../components/buttons'


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
  font-weight: 300;
  font-size: 1.1em;
  letter-spacing: -1px;
  right: ${props => props.right};
  top: 7%;
  color: #a72f55
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

const Buy = styled('div')`
  position: absolute;
  top: 18%;
  right: 45%;
  z-index: 2;
`;

class CoffeeDetail extends Component {
 coffeeId = ':coffee_id';   // to change to passed url params later
 // coffeeId = this.props.match.params.coffeeId

  componentDidMount() {
    this.props.getCoffee(this.coffeeId);
  }

  id = 'ecedd2e7-c913-4250-a331-932c219c8000'    // to change later


  render() {

    const { coffees } = this.props;

    // coffeeBox

    let altitude = coffees[this.id] && coffees[this.id].altitude;
    let bean_density = coffees[this.id] && coffees[this.id].bean_density;
    let business_name = coffees[this.id] && coffees[this.id].Producer.business_name;
    let botanical_variety = coffees[this.id] && coffees[this.id].botanical_variety;
    let BusinessDescription = coffees[this.id] && coffees[this.id].Producer.description;
    let CoffeeDetails = coffees[this.id] && coffees[this.id].details;
    let name = coffees[this.id] && coffees[this.id].name;
    let roast_appearance = coffees[this.id] && coffees[this.id].roast_appearance;
    let preparation = coffees[this.id] && coffees[this.id].preparation;

    // picture

    let picture = coffees[this.id] && coffees[this.id].pictures[0].url;

     // reviewsBox

    let rating = coffees[this.id] && coffees[this.id].rating;
    let reviews = coffees[this.id] && coffees[this.id].reviews;
    // typeof Reviews = a string, we need it as an array to map over it 


    return (

      <Div>

        <ImageFormat>   <img src={picture} alt= "plantation" /></ImageFormat>

        <Company> {business_name || `loading`} </Company>

        <Buy><DefaultButton> ORDER </DefaultButton></Buy>

        <CoffeeBox>
          <Subtitle> {name || `loading` } </Subtitle>
          <ThirdTitle right='25%'> PRICE - $ 200 </ThirdTitle>
          <Paragraph top='7%'> 
            <br /> 
            <b>  Producer :</b> {BusinessDescription || "loading" } 
            <br />
            <b>  Variety : </b> {botanical_variety || "loading"}
            <br />
            <b>  Detail:</b> {CoffeeDetails || "loading"} 
            <br />
            <b>  Altitude:</b> {altitude || "loading"} 
            <br /> 
            <b>  Bean Density : </b> {bean_density || "loading"}
            <br /> 
            <b>  Roast Appearance : </b> {roast_appearance || "loading"}
            <br />
            <b>  Preparation : </b> {preparation || "loading"}
           </Paragraph>
        </CoffeeBox>

        <Location> COLOMBIA, BOGOTA </Location>

        <MapDetail></MapDetail>

        <ReviewBox>
          <Subtitle> Reviews </Subtitle>
          <ThirdTitle right='7%'> AVERAGE - * {rating} </ThirdTitle>
          <Paragraph top='7%'>
            <br />
            "{ reviews || "loading... reviews"}"
           </Paragraph>
        {/*    once reviews are an array we will run the map function here instead  */}
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
