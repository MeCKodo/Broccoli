import { ReactNode } from 'react';

type ButtonSize = 'large' | 'medium' | 'small';

type ButtonProps = {
  onClick?: () => void; // todo
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  children: ReactNode | string;
  className?: string;
};

export { ButtonProps, ButtonSize };
