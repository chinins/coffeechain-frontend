import React, { Component } from 'react';
import MapDetail from '../components/map-detail';
import { connect } from 'react-redux';
import * as CoffeeActions from '../redux/actions/coffees';
import { LightButtonSimple } from '../components/buttons'
import { Link } from 'react-router-dom';
import { Div, Location, Buy, ImageFormat, ReviewBox, CoffeeBox, Paragraph, Subtitle, ThirdTitle, Company } from './coffee-detail-style'

class CoffeeDetail extends Component {

 coffeeId = ':coffee_id';   // to change to passed url params later - so coffeeId = this.props.match.params.coffeeId
  id = 'ecedd2e7-c913-4250-a331-932c219c8000'   

  componentDidMount() {
    this.props.getCoffee(this.coffeeId);
  }

  render() {

    const { coffees } = this.props;
    const check = coffees[this.id]; 

    let altitude = check && check.altitude;
    let bean_density = check && check.bean_density;
    let business_name = check && check.Producer.business_name;
    let botanical_variety = check && check.botanical_variety;
    let BusinessDescription = check && check.Producer.description;
    let CoffeeDetails = check && check.details;
    let name = check && check.name;
    let roast_appearance = check && check.roast_appearance;
    let preparation = check && check.preparation;
    let picture = check && check.pictures[0].url;
    let rating = check && check.rating;
    let reviews = check && check.reviews;
    let reviewsarray = [reviews, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasiem ullam corporis suscipit laboriosam, nisi ut aliquid ex consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?", "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasiem ullam corporis suscipit laboriosam, nisi ut aliquid ex consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur ?"];

     let renderReviews = () => {
       return reviewsarray.map((review, index) => {
         return <Paragraph key={index} top='2%'> " {review} " </Paragraph>;
      })
    }

    return (
      <Div>
        <ImageFormat>   <img src={picture} alt= "plantation" /></ImageFormat>
        <Company> {business_name || `loading`} </Company>
        <Link to={{ pathname: `/order` }} > <Buy><LightButtonSimple> ORDER </LightButtonSimple></Buy> </Link>
        <CoffeeBox>
          <Subtitle> {name || `loading` } </Subtitle>
          <ThirdTitle right='20%'> PRICE - $ 200 </ThirdTitle>
          <Paragraph top='7%'> 
            <br/> <b>  Producer :</b> {BusinessDescription || "loading" } 
            <br/> <b>  Variety : </b> {botanical_variety || "loading"}
            <br/> <b>  Detail:</b> {CoffeeDetails || "loading"} 
            <br/> <b>  Altitude:</b> {altitude || "loading"} 
            <br/> <b>  Bean Density : </b> {bean_density || "loading"}
            <br/> <b>  Roast Appearance : </b> {roast_appearance || "loading"}
            <br/> <b>  Preparation : </b> {preparation || "loading"}
           </Paragraph>
        </CoffeeBox>
        <Location> COLOMBIA, BOGOTA </Location>
        <MapDetail></MapDetail>
        <ReviewBox>
          <Subtitle> Reviews </Subtitle>
          <ThirdTitle right='7%'> AVERAGE - * {rating} </ThirdTitle>
          <Paragraph top='7%'>  {renderReviews()} </Paragraph>
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
