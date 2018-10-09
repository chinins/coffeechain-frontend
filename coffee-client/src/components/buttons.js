import styled from 'react-emotion';

const DefaultButton = styled('button')`
  background: ${props => props.theme.colors.secondary};
  border: ${props => `solid 1px ${props.theme.colors.accessory}`};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  color: ${props => props.theme.colors.primary};
  heigth: 4em;
  width: 8em;
  margin: 5px;
`;

const SmallButton = styled(DefaultButton)`
  box-shadow: ${props => props.theme.boxShadow};
  width: 4em;
  margin: 5px;
`;

const LightButton = styled(DefaultButton)`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
  border: ${props => `solid 1px ${props.theme.colors.secondary}`};
`;

export { DefaultButton, SmallButton, LightButton };