import styled from 'styled-components';
import { typography } from '@/components/utils';

export const StyledBrandFooter = styled.p`
  text-align: center;
  ${typography('caption1')};
  font-style: italic;
`;

export const StyledNav = styled.nav`
  width: 90%;
  max-width: 1032px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const StyledBrandTitle = styled.h1`
  ${typography('title2')};
`;
