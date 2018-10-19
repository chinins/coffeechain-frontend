import styled from 'react-emotion';

const DefaultButton = styled('button')`
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.colors.secondary};
  box-shadow: ${props => props.theme.boxShadow};
  color: ${props => props.theme.colors.primary};
  heigth: 2.5em;
  width: 8em;
  margin: 7px;
  padding: 5px;
  text-align: center;
  :active {
    outline: none
  }
`;

const InputButton = styled('input')`
  background: ${props => props.theme.colors.secondary};
  border: ${props => `solid 1px ${props.theme.colors.accessory}`};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  color: ${props => props.theme.colors.primary};
  heigth: 2.5em;
  width: 8em;
  margin: 7px;
  padding: 5px;
  text-align: center;
`;

const SmallButton = styled(DefaultButton)`
  box-shadow: ${props => props.theme.boxShadow};
  width: 4em;
  margin: 5px;
`;

const LightButtonSimple = styled(DefaultButton)`
  background: ${props => props.theme.colors.primary};
  border: ${props => `solid 1px ${props.theme.colors.accessory}`};
  color: black;
  width: 5em;
`;

const LightButton = styled(DefaultButton)`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
  border: ${props => `solid 1px ${props.theme.colors.secondary}`};
`;

export {
  DefaultButton,
  SmallButton,
  LightButton,
  LightButtonSimple,
  InputButton
};
