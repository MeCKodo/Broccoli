import styled from 'styled-components';
import { TextFieldClassNames } from '@/components/TextField';

export const StyledButtonWrapper = styled.div`
  /* width: 100%; */
  margin: 30px 0 8px;
`;

export const StyledInputWrapper = styled.div`
  /* width: 100%; */
  .${TextFieldClassNames.root} {
    margin-bottom: 24px;
  }
`;
