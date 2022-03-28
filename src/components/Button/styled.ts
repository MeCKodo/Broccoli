import styled, { css } from 'styled-components';
import { palette } from '../utils';
import { ButtonClassNames } from './Button';
import { ButtonSize } from './types';

type SizeStyleMap = Record<
ButtonSize,
{
  maxWidth: number;
  height: number;
  borderRadius: number;
}
>;

const sizeStyleMap: SizeStyleMap = {
  small: {
    maxWidth: 150,
    height: 24,
    borderRadius: 12,
  },
  medium: {
    maxWidth: 250,
    height: 36,
    borderRadius: 18,
  },
  large: {
    maxWidth: 360,
    height: 48,
    borderRadius: 24,
  },
};

export const StyledButton = styled.button`
  ${({ size }: { size: ButtonSize }) => {
    const { maxWidth, height, borderRadius } = sizeStyleMap[size];
    return css`
      max-width: ${maxWidth}px;
      height: ${height}px;
      border-radius: ${borderRadius}px;
    `;
  }}
  margin: 8px 0;
  width: 100%;
  border: 0px;
  font-size: 1rem;
  font-weight: 700;
  line-height: 24px;
  background-color: ${palette('background', 'button')};
  color: ${palette('text', 'commonWhite')};
  transition: all .3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${palette('background', 'buttonHover')};
  }

  &.${ButtonClassNames.disabled} {
    background-color: ${palette('background', 'disabled')};
  }
`;
