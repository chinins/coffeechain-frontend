import React, { Component } from 'react';
import MapDetail from '../components/map-detail';
import { connect } from 'react-redux';
import styled, { css } from 'react-emotion';
import * as CoffeeActions from '../redux/actions/coffees';
import { ListImage } from '../components/images';
import { IPFS_URL } from '../constants/connections';
import { InfoBox } from '../shared/elements';
import { DefaultButton } from '../components/buttons';
import { secondary } from '../shared/colors';
import Review from '../components/review';
import { Link } from 'react-router-dom';

const CoffeeInfoBox = styled('div')`
  display: flex;
  flex-direction: column;
  max-width: 880px;
  margin: auto
`;

const CoffeeData = styled(InfoBox) `
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 3em;
`;

const Details = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 3em;
  min-width: 10em;
`;

const PriceBox = styled(Details)`
  align-items: center;
  padding-left: 4em;
  justify-content: space-evenly;
  height: 70%;
`;

const ReviewsContainer = styled('div')`
  display: flex;
  max-width: 750px;
  margin: 0 3em 3em 3em;
  flex-direction: column;
  overflow: hidden;
  overflow-y: scroll;
`;

const Title = styled('div')`
  font-size: 140%;
  font-weight: bold;
  margin-bottom: 0.2em;
`;

const Price = styled(Title)`
  color: ${secondary};
`;

const Item = styled('div')`
  display: flex;
  margin-top: 3px;
`;

const Label = styled('div')`
  font-weight: bold;
  margin-right: 0.5em;
`;

class CoffeeDetail extends Component {
  constructor (props) {
    super(props);
    this.id = this.props.match.params.coffeeId;
  }

  componentDidMount () {
    this.props.getCoffee(this.id);
  }

  render () {

    const reviewsarray = [
      {
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasiem ullam corporis suscipit laboriosam, nisi ut aliquid ex consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        stars: 5,
        author: 'Nomad Coffee'
      },
      {
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasiem ullam corporis suscipit laboriosam, nisi ut aliquid ex consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        stars: 5,
        author: 'Satan\' Coffee'
      },
      {
        text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasiem ullam corporis suscipit laboriosam, nisi ut aliquid ex consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        stars: 5,
        author: 'Little Fern'
      },
    ];

    const renderReviews = () => {
      return reviewsarray.map((review, index) => {
        return (
          <Review key={index} review={review}/>
        );
      });
    };

    if (this.props.coffees && this.props.coffees[this.id]) {
      const coffee = this.props.coffees[this.id];
      const picture_hash = coffee.picture_hash || '/QmQM4gsCn2Zy6ipw9bGSmPvTCzRY6e8EjXt5TmyHi8L5yu';

      return (
        <div>
          <CoffeeInfoBox>
            <CoffeeData>
              <ListImage src={IPFS_URL + picture_hash}/>
              <Details>
                <Title>{coffee.name}</Title>
                <Item>
                  <Label>Region: </Label>
                  <div>{coffee.region}</div>
                </Item>
                <Item>
                  <Label>Altitude: </Label>
                  <div>{coffee.altitude}</div>
                </Item>
                <Item>
                  <Label>Type:: </Label>
                  <div>{coffee.botanical_variety}</div>
                </Item>
                <Item>
                  <Label>Availability: </Label>
                  <div>{coffee.available} kg</div>
                </Item>
                {/* <Item>
                  <Label>Details: </Label>
                  <div>{coffee.details}</div>
                </Item> */}
              </Details>
              <PriceBox>
                <Label className={css`
                  font-size: 120%;
                `}>Price</Label>
                <Price>{coffee.price_kg} $/kg</Price>
                <Link to={{ pathname: `/order/${this.id}` }}>
                  {' '}
                  <DefaultButton className={css`font-weight: bold;`}>Order</DefaultButton>
                </Link>
              </PriceBox>
            </CoffeeData>
          </CoffeeInfoBox>
          <ReviewsContainer>
            <Title>Reviews</Title>
            {renderReviews()}
          </ReviewsContainer>
          <MapDetail/>
        </div>
      );
    } else return <div></div>;
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
