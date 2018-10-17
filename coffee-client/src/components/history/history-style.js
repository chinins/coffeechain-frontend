import styled, { css } from 'react-emotion';


const Title = styled('div')`
  margin-top: 5%;
  margin-left: 10%;
  font-weight: 400;
  font-size: 1.9em;
  color: grey;
`;

const Order = styled('div')`
  margin-left: 10%;
  font-weight: 400;
  font-size: 1em;
  color: black;
`;


const Total = styled('div')`
  margin-top: -1.8%;
  margin-left: 51%;
  font-weight: 400;
  font-size: 1.5em;
  color: grey;
`;

const Hr = styled('hr')`
  display: block;
  border: 0;
  width: 53%;
  margin-top: 2%;
  margin-left: 10%;
  border-top: 2px solid grey;
`;

const HrSmall = styled('hr')`
  display: block;
  border: 0;
  width: 53%;
  margin-top: 2%;
  margin-left: 10%;
  border-top: 1px solid grey;
`;

const CoffeeBox = styled('div')`
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
  height: 17%;
  width: 25%;
  letter-spacing: -0.5px;
  margin-left: 10%;
  margin-bottom: 1%;
  margin-top:1%;
  background-color: transparent;
  color: black;
  text-align: left;
`;

const Div = styled('div')`
display: flex;
flex-direction: column;
height: 500px;;
overflow-y: scroll;
`



export { HrSmall, Div, CoffeeBox, Hr, Title, Total, Order }