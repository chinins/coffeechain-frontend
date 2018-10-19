import React from 'react';
import styled from 'react-emotion';
import { secondary } from '../shared/colors';
import StarSvg from '../assets/icons/star.svg';

const ReviewContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0.3em 0;
`;

const Stars = styled('div')`
  display: flex;
  color: ${secondary};
`;

const Author = styled('div')`
  font-weight: bold;
  // color: ${secondary};
`;

const ReviewText = styled('div')`

`;

const StarIcon = styled('img')`
  height: 15px;
  margin: 3px 0;
`;

function Review (props) {
  const stars = [];
  const renderStars = numStars => {
    for (let i = 0; i < numStars; i++) {
      stars.push(<StarIcon src={StarSvg}/>);
    }
    return stars;
  };

  return (
    <ReviewContainer>
      <Author>{props.review.author}</Author>
      <Stars>

        {renderStars(props.review.stars)}</Stars>
      <ReviewText>{props.review.text}</ReviewText>
    </ReviewContainer>
  );
}

export default Review;
