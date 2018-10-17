import React, { Component } from 'react';
// import MapDetail from '../components/map-detail';
import Map from '../components/map';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import * as CoffeeActions from '../redux/actions/coffees';
import { ListImage } from '../components/images';

import { LightButtonSimple } from '../components/buttons';
import { Link } from 'react-router-dom';

const CoffeeInfoBox = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 3em;
  max-width: 750px;
`;

const CoffeeData = styled('div') `
  display: flex;
  justify-content: space around;
  align-items: center;
  margin-bottom: 3em;
`;

const Details = styled('div')`
  display: flex;
  margin-left: 3em;
`;

const ReviewsContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;

const Title = styled('div')`
  font-size: 120%;
  font-weight: bold;
`;

class CoffeeDetail extends Component {
  constructor (props) {
    super(props);
    // this.coffeeId = this.props.match.params.coffeeId;
    this.id = this.props.match.params.coffeeId;
  }

  componentDidMount () {
    this.props.getCoffee(this.id);
  }

  render () {

    const picture_url =
      'https://images.unsplash.com/photo-1527018263374-5adb6a54f01e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=76ac2e56cf4887aac218a89543847865&auto=format&fit=crop&w=800&q=60';

    const reviewsarray = [
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasiem ullam corporis suscipit laboriosam, nisi ut aliquid ex consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasiem ullam corporis suscipit laboriosam, nisi ut aliquid ex consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasiem ullam corporis suscipit laboriosam, nisi ut aliquid ex consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur ?'
    ];

    const renderReviews = () => {
      return reviewsarray.map((review, index) => {
        return (
          <div key={index}>{review}</div>
        );
      });
    };

    if (this.props.coffees && this.props.coffees[this.id]) {
      const coffee = this.props.coffees[this.id];
      return (
        <div>
          <CoffeeInfoBox>
            <CoffeeData>
              <ListImage src={picture_url}/>
              <Details>
                <Title>{coffee.name}</Title>
              </Details>
            </CoffeeData>
            <ReviewsContainer>
              <Title>Reviews</Title>
              {renderReviews()}
            </ReviewsContainer>
          </CoffeeInfoBox>
          <Map
            data={this.props.coffees}
            result={this.props.result}
          />
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
