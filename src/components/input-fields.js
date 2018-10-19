import styled from 'react-emotion';

const Label = styled('label')`
  margin: 10px;
  width: 25em;
  text-align: right;
`;

const LabelSelect = styled('label')`
  padding-left: 30px;
`;

const SelectInput = styled('select')`
  margin-left: 15px;
  border: ${props => `solid 1px ${props.theme.colors.secondary}`};
`;

const InputField = styled('input')`
  margin-left: 15px;
  border-radius: ${props => props.theme.borderRadius};
  border: ${props => `solid 1px ${props.theme.colors.secondary}`};
`;

const Form = styled('form')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export { Label, InputField, SelectInput, Option, LabelSelect, Form };
