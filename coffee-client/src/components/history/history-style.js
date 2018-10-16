import styled, { css } from 'react-emotion';


const Title = styled('div')`
  margin-top: 5%;
  margin-left: 10%;
  font-weight: 400;
  font-size: 1.9em;
  color: grey;
`;

const Orderid = styled('div')`
  margin-left: 10%;
  font-weight: 400;
  font-size: 1em;
`;


const Total = styled('div')`
  margin-top: -1.8%;
  margin-left: 51%;
  font-weight: 400;
  font-size: 1.5em;
`;

const Hr = styled('hr')`
  display: block;
  border: 0;
  width: 53%;
  margin-top: 2%;
  margin-left: 10%;
  border-top: 2px solid grey;
`;

const CoffeeBox = styled('div')`
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
  height: 17%;
  width: 25%;
  position: absolute;
  letter-spacing: -0.5px;
  top: 26.8%;
  right: 40%;
  background-color: transparent;
  color: black;
  text-align: right;
`;


export { CoffeeBox, Hr, Title, Total, Orderid }