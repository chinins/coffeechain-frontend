import styled from 'react-emotion';

const ListImage = styled('img')`
  heigth: 22em;
  width: 22em;
  border-radius: ${props => props.theme.borderRadius};
`;

const ProfileImage = styled('img')`
  heigth: 15em;
  width: auto;
  border-radius: ${props => props.theme.borderRadius};
`;

export { ListImage, ProfileImage };
