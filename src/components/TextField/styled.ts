import styled from 'styled-components';
import { palette, typography } from '../utils';
import { TextFieldClassNames } from './constants';

export const StyledTextFiledWrapper = styled.div`
  width: 160px;

  &.${TextFieldClassNames.fullWidth} {
    width: 100%;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${palette('border', 'natural')};
  border-radius: 4px;
  background-color: ${palette('background', 'paper')};
  outline: 0;
  color: ${palette('text', 'natural')};
  padding: 8px;
  &:focus,
  &:focus-within,
  &:hover {
    background-color: ${palette('background', 'commonWhite')};
  }

  &:focus,
  &:focus-within {
    border-color: ${palette('border', 'selected')};
    outline: 1px solid ${palette('border', 'selected')};
  }

  &.${TextFieldClassNames.error} {
    border-color: ${palette('border', 'danger')};
    &:focus,
    &:focus-within {
      outline: 1px solid ${palette('border', 'danger')};
    }
  }
`;

export const StyledHelperText = styled.p`
  margin-top: 4px;
  ${typography('caption1')};
  &.${TextFieldClassNames.error} {
    color: ${palette('text', 'danger')};
  }
`;
