import { ButtonClassNames } from './constants';
import { ButtonProps } from './types';
import * as S from './styled';

const Button = (props: ButtonProps) => {
  const {
    loading = false,
    loadingText = 'Loading...',
    disabled = false,
    children,
    size = 'small',
    className,
    onClick,
    ...rest
  } = props as any;
  const text = loading ? loadingText : children;

  const classNameArr = [className, ButtonClassNames.root];
  if (disabled) {
    classNameArr.push(ButtonClassNames.disabled);
  }

  const _onClick = () => {
    if (disabled || loading) {
      return;
    }
    onClick();
  };

  return (
    <S.StyledButton {...rest} onClick={_onClick} className={classNameArr.join(' ')} size={size}>
      {text}
    </S.StyledButton>
  );
};

Button.displayName = 'Button';

export { Button, ButtonClassNames };
