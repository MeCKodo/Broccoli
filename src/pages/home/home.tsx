import {
  StyledLayout,
  StyledHeaderWrapper,
  StyledMainWrapper,
  StyledFooterWrapper,
} from '@/components/Layout';
import { BRAND_NAME } from './constants';
import { MainContent } from './components/MainContent';
import * as S from './styled';

const Home = () => (
  <StyledLayout>
    <StyledHeaderWrapper>
      <S.StyledNav><S.StyledBrandTitle>{BRAND_NAME}</S.StyledBrandTitle></S.StyledNav>
    </StyledHeaderWrapper>
    <StyledMainWrapper>
      <MainContent />
    </StyledMainWrapper>
    <StyledFooterWrapper>
      <S.StyledBrandFooter>
        Made with ♥ in Melbourne. <br />© 2016 Broccoli & Co. All rights
        reserved.
      </S.StyledBrandFooter>
    </StyledFooterWrapper>
  </StyledLayout>
);

export { Home };
