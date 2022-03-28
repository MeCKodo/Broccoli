import { HelperTextClassNames } from './constants';
import { HelperTextProps } from './types';
import * as S from './styled';

const HelperText = (props: HelperTextProps) => {
  const { type = 'info', children } = props;
  const classNameArr = [HelperTextClassNames.root, HelperTextClassNames[type]];
  return (
    <S.StyledHelperText className={classNameArr.join(' ')}>
      {children}
    </S.StyledHelperText>
  );
};

HelperText.displayName = 'HelperText';

export { HelperText };
