import styled from 'styled-components';
import { typography } from '@/components/utils';

const StyledMainContentWrapper = styled.div`
  max-width: 600px;
  text-align: center;
`;

const StyledWelcomeStatement = styled.p`
  ${typography('display3')};
`;

const StyledMessage = styled.p`
  ${typography('title1')};
`;

export { StyledMainContentWrapper, StyledWelcomeStatement, StyledMessage };
