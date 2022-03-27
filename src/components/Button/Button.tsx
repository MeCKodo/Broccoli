import styled, { css } from 'styled-components';
import { palette } from '../utils';
import { ButtonProps, ButtonSize } from './types';

enum ButtonClassNames {
  root = 'Button-root',
  disabled = 'Button-disabled',
}

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

const StyledButton = styled.button`
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

const Button = (props: ButtonProps) => {
  const {
    loading = false,
    loadingText = 'Loading...',
    disabled = false,
    children,
    size = 'small',
    ...rest
  } = props;
  const text = loading ? loadingText : children;

  const classNameArr = [ButtonClassNames.root];
  if (disabled) {
    classNameArr.push(ButtonClassNames.disabled);
  }

  return (
    <StyledButton size={size} {...rest} className={classNameArr.join(' ')}>
      {text}
    </StyledButton>
  );
};

Button.displayName = 'Button';

export { Button, ButtonClassNames };
