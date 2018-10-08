import styled from 'react-emotion';

const DefaultButton = styled('button')`
  background: ${props => props.theme.colors.secondary};
  border: ${props => `solid 1px ${props.theme.colors.accessory}`};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  color: ${props => props.theme.colors.primary};
  margin: 5px;
`;

const SmallButton = styled('button')`
  background: ${props => props.theme.colors.secondary};
  border: ${props => `solid 1px ${props.theme.colors.accessory}`};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  color: ${props => props.theme.colors.primary};
  margin: 5px;
`;

const LightButton = styled('button')`
  background: ${props => props.theme.colors.primary};
  border: ${props => `solid 1px ${props.theme.colors.accessory}`};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  color: ${props => props.theme.colors.secondary};
  margin: 5px;
`;

export { DefaultButton, SmallButton, LightButton };