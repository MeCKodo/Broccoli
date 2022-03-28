/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';

import ReactDOM from 'react-dom';
import { DialogProps } from './types';
import * as S from './styled';

const Dialog = (props: DialogProps) => {
  const {
    title, children, open, onClose,
  } = props;
  const [_show, setShow] = useState(open);
  const _onClose = () => {
    setShow(false);
    onClose?.();
  };
  // 简单处理显示
  return _show ? (
    <S.StyledContainer>
      <S.StyledBackdrop onClick={_onClose} />
      <S.StyledDialogWrapper>
        <S.StyledDialogBox>
          <S.StyledDialogTitle>{title}</S.StyledDialogTitle>
          <S.StyledDialogContentWrapper>{children}</S.StyledDialogContentWrapper>
        </S.StyledDialogBox>
      </S.StyledDialogWrapper>
    </S.StyledContainer>
  ) : null;
};

const DialogCmd = (props: DialogProps) => {
  const { open, onClose, children } = props;
  const [_open, setOpen] = useState(open);

  useEffect(() => {
    setOpen(open);
  }, [open]);

  const defaultClose = () => setOpen(false);

  return (
    <Dialog
      {...props}
      open={_open}
      onClose={onClose ?? defaultClose}
    >
      {children}
    </Dialog>
  );
};

// 这里仅仅只是极简版支持命令式调用，有两个缺点DOM.render 不同react实例，其实应该用portal来做
// 没有做dialog管理，所以最好需要实现portalManager 或者dialogManager
Dialog.show = (props: Omit<DialogProps, 'open'> & { children: JSX.Element | React.ReactNode }) => {
  const { children, ...rest } = props;
  const div = document.createElement('div');
  document.body.appendChild(div);

  function handelClose() {
    ReactDOM.unmountComponentAtNode(div);
    if (div?.parentNode) {
      div.parentNode.removeChild(div);
    }
  }
  function renderModal(open: boolean) {
    const Comp = (
      <DialogCmd
        {...rest}
        open={open}
        onClose={props.onClose ?? handelClose}
      >
        {children}
      </DialogCmd>
    );
    ReactDOM.render(Comp, div);
  }

  renderModal(true);

  return {
    dismiss: handelClose,
  };
};

Dialog.displayName = 'Dialog';

export { Dialog };
