import React, { Component } from 'react';
import MapDetail from '../components/map-detail';
import { connect } from 'react-redux';
import * as CoffeeActions from '../redux/actions/coffees';
import { LightButtonSimple } from '../components/buttons';
import { Link } from 'react-router-dom';
import {
  Div,
  Location,
  Buy,
  ImageFormat,
  ReviewBox,
  CoffeeBox,
  Paragraph,
  Subtitle,
  ThirdTitle,
  Company
} from './coffee-detail-style';

class CoffeeDetail extends Component {
  constructor (props) {
    super(props);
    this.coffeeId = this.props.match.params.coffeeId;
    this.id = this.coffeeId;
  }

  componentDidMount () {
    this.props.getCoffee(this.coffeeId);
  }

  render () {
    const { coffees } = this.props;
    const check = coffees[this.id];

    const altitude = check && check.altitude;
    const business_name = check && check.producer && check.producer.business_name;
    const botanical_variety = check && check.botanical_variety;
    const BusinessDescription = check && check.producer && check.producer.description;
    const CoffeeDetails = check && check.details;
    const name = check && check.name;
    const roast_appearance = check && check.roast_appearance;
    const preparation = check && check.preparation;
    const picture =
      'https://images.unsplash.com/photo-1527018263374-5adb6a54f01e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=76ac2e56cf4887aac218a89543847865&auto=format&fit=crop&w=800&q=60';
    const rating = check && check.rating;
    const reviews = check && check.reviews;

    let reviewsarray = [
      reviews,
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasiem ullam corporis suscipit laboriosam, nisi ut aliquid ex consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasiem ullam corporis suscipit laboriosam, nisi ut aliquid ex consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur ?'
    ];

    let renderReviews = () => {
      return reviewsarray.map((review, index) => {
        return (
          <Paragraph key={index} top="2%">
            {' '}
            " {review} "{' '}
          </Paragraph>
        );
      });
    };

    return (
      <Div>
        <ImageFormat>
          {' '}
          <img src={picture} alt="plantation" />
        </ImageFormat>
        <Company> {business_name || 'loading'} </Company>
        <Link to={{ pathname: `/order/${this.coffeeId}` }}>
          {' '}
          <Buy>
            <LightButtonSimple> ORDER </LightButtonSimple>
          </Buy>{' '}
        </Link>
        <CoffeeBox>
          <Subtitle> {name || 'loading'} </Subtitle>
          <ThirdTitle right="20%"> PRICE - $ 200 </ThirdTitle>
          <Paragraph top="7%">
            <br /> <b> Producer :</b> {BusinessDescription || 'loading'}
            <br /> <b> Variety : </b> {botanical_variety || 'loading'}
            <br /> <b> Detail:</b> {CoffeeDetails || 'loading'}
            <br /> <b> Altitude:</b> {altitude || 'loading'}
            <br /> <b> Roast Appearance : </b> {roast_appearance || 'loading'}
            <br /> <b> Preparation : </b> {preparation || 'loading'}
          </Paragraph>
        </CoffeeBox>
        <Location> COLOMBIA, BOGOTA </Location>
        <MapDetail />
        <ReviewBox>
          <Subtitle> Reviews </Subtitle>
          <ThirdTitle right="7%"> AVERAGE - * {rating} </ThirdTitle>
          <Paragraph top="7%"> {renderReviews()} </Paragraph>
        </ReviewBox>
      </Div>
    );
  }
}

const mapStateToProps = state => ({
  coffees: state.entities.coffees,
  result: state.pages.coffeeDetail.result
});

const mapDispatchToProps = dispatch => ({
  getCoffee: coffeeId => dispatch(CoffeeActions.getCoffee(coffeeId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoffeeDetail);
