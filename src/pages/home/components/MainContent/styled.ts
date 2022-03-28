import styled from 'styled-components';
import { typography } from '@/components/utils';

export const StyledMainContentWrapper = styled.div`
  max-width: 600px;
  text-align: center;
`;

export const StyledWelcomeStatement = styled.p`
  ${typography('display2')};
  padding: 0 0 12px;
`;

export const StyledMessage = styled.p`
  ${typography('title1')};
  padding: 0 0 24px;
`;
