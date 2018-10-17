import styled from 'react-emotion';

export const InfoBox = styled('div')`
  display: flex;
  justify-content: space-between;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  border: ${props => `solid 1px ${props.theme.colors.accessory}`};
  margin: 30px 10px;
  height: 15em;
`;

export const Item = styled('div')`
display: flex;
margin: 5px 0;
`;
