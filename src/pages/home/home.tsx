import {
  StyledLayout,
  StyledHeaderWrapper,
  StyledMainWrapper,
  StyledFooterWrapper,
} from '@/components/Layout';
import { BRAND_NAME } from './constants';
import { MainContent } from './components/MainContent';
import { StyledBrandTitle, StyledBrandFooter, StyledNav } from './styled';

const Home = () => (
  <StyledLayout>
    <StyledHeaderWrapper>
      <StyledNav><StyledBrandTitle>{BRAND_NAME}</StyledBrandTitle></StyledNav>
    </StyledHeaderWrapper>
    <StyledMainWrapper>
      <MainContent />
    </StyledMainWrapper>
    <StyledFooterWrapper>
      <StyledBrandFooter>
        Made with ♥ in Melbourne. <br />© 2016 Broccoli & Co. All rights
        reserved.
      </StyledBrandFooter>
    </StyledFooterWrapper>
  </StyledLayout>
);

export { Home };
