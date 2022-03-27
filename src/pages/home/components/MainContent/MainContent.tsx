import {
  StyledMainContentWrapper,
  StyledWelcomeStatement,
  StyledMessage,
} from './styled';
import { Button } from '@/components/Button';

const MainContent = () => (
  <StyledMainContentWrapper>
    <StyledWelcomeStatement>
      A better way to enjoy everyday.
    </StyledWelcomeStatement>
    <StyledMessage>Be the first to know when we launch.</StyledMessage>
    <Button size="large">Request an invite</Button>
  </StyledMainContentWrapper>
);

export { MainContent };
