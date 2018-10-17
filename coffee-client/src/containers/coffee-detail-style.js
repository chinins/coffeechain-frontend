import styled from 'react-emotion';

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
  top: 9%;
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

const Paragraph = styled('div')`
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


export { Div, Location, Buy, ImageFormat, ReviewBox, CoffeeBox, Paragraph, Subtitle, ThirdTitle, Company };