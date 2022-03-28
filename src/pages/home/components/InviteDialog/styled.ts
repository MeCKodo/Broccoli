import styled from 'styled-components';
import { TextFieldClassNames } from '@/components/TextField';
import { typography } from '@/components/utils';

export const StyledButtonWrapper = styled.div`
  /* width: 100%; */
  margin: 30px 0 8px;
`;

export const StyledInputWrapper = styled.div`
  /* width: 100%; */
  text-align: left;
  .${TextFieldClassNames.root} {
    margin-bottom: 24px;
  }
`;

export const StyledSuccessText = styled.p`
  ${typography('subheading2')};
  padding: 0 0 40px;
  text-align: center;
`;
