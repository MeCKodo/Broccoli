import styled from 'styled-components';
import { typography, palette } from '../utils';
import { HelperTextClassNames } from './constants';

export const StyledHelperText = styled.p`
  ${typography('body1')};
  min-height: 30px;
  margin: 8px 0;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  color: ${palette('text', 'natural')};

  &.${HelperTextClassNames.info} {
    background-color: ${palette('background', 'info')};
  }
  &.${HelperTextClassNames.error} {
    background-color: ${palette('background', 'danger')};
  }
  &.${HelperTextClassNames.success} {
    background-color: ${palette('background', 'success')};
  }
`;
