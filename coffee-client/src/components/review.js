import React from 'react';
import styled from 'react-emotion';
import { secondary } from '../shared/colors';
// import StarSvg from '../assets/icons/star.svg';

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

function Review (props) {

  return (
    <ReviewContainer>
      <Author>{props.review.author}</Author>
      <Stars>{props.review.stars}</Stars>
      <ReviewText>{props.review.text}</ReviewText>
    </ReviewContainer>
  );
}

export default Review;
