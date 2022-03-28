import styled from 'styled-components';
import { typography } from '@/components/utils';

export const StyledMainContentWrapper = styled.div`
  max-width: 600px;
  text-align: center;
`;

export const StyledWelcomeStatement = styled.p`
  ${typography('display3')};
`;

export const StyledMessage = styled.p`
  ${typography('title1')};
`;

export const StyledSuccessText = styled.p`
  ${typography('subheading2')};
  padding: 0 0 40px;
  text-align: center;
`;
