import styled from 'styled-components';
import { typography } from '@/components/utils';

const StyledBrandFooter = styled.p`
  text-align: center;
  ${typography('caption1')};
  font-style: italic;
`;

const StyledNav = styled.nav`
  width: 90%;
  max-width: 1032px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const StyledBrandTitle = styled.h1`
  ${typography('title2')};
`;

export { StyledBrandFooter, StyledBrandTitle, StyledNav };
