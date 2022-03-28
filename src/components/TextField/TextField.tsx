import React from 'react';
import { TextFieldClassNames } from './constants';
import * as S from './styled';

type TextFieldProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
  isFullWidth?: boolean;
  isError?: boolean;
  helperText?: string;
  minLength?: number;
  maxLength?: number;
};

const TextField = (props: TextFieldProps) => {
  const {
    helperText = '', isFullWidth = true, isError = false, minLength, maxLength, ...rest
  } = props;

  const rootClassNameArr = [TextFieldClassNames.root];
  if (isFullWidth) {
    rootClassNameArr.push(TextFieldClassNames.fullWidth);
  }

  return (
    <S.StyledTextFiledWrapper className={rootClassNameArr.join(' ')}>
      <S.StyledInput
        {...rest}
        maxLength={maxLength}
        minLength={minLength}
        className={isError ? TextFieldClassNames.error : ''}
      />
      {helperText && (
        <S.StyledHelperText className={isError ? TextFieldClassNames.error : ''}>
          {helperText}
        </S.StyledHelperText>
      )}
    </S.StyledTextFiledWrapper>
  );
};

TextField.displayName = 'TextField';

export { TextField, TextFieldClassNames };
