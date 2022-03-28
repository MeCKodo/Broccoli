import { ReactNode } from 'react';

type DialogProps = {
  open: boolean;
  title: string;
  onClose?: () => void;
  children: ReactNode;
};

export { DialogProps };
