import {
  render, fireEvent, waitFor, screen, cleanup,
} from '@testing-library/react';
import { InviteDialog } from '../InviteDialog';
import { useFieldState, useSubmit } from '../hooks';

jest.mock('../hooks');

describe('inviteDialog', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
    cleanup();
  });

  const mockedProps = {
    onSuccess: jest.fn(),
    onClose: jest.fn(),
  };

  const mockedUseFieldState = {
    userInfo: {
      name: 'name',
      email: 'email',
      confirmEmail: 'confirmEmail',
    },
    infoError: {
      name: false,
      email: false,
      confirmEmail: false,
    },
    onChange: jest.fn().mockReturnValue(jest.fn()),
    checkIfInfoInvalid: jest.fn().mockReturnValue(false),
  };

  function getMockedUseFieldState(props?: Object) {
    return { ...mockedUseFieldState, ...(props || {}) };
  }

  const mockedUseSubmit = {
    sendButtonLoading: false,
    errorTip: '',
    onSubmit: jest.fn().mockReturnValue(true),
  };

  function getMockedUseSubmit(props?: Object) {
    return { ...mockedUseSubmit, ...(props || {}) };
  }

  it('should submit when click button when all info is correct', async () => {
    (useFieldState as jest.Mock).mockReturnValueOnce(getMockedUseFieldState());
    (useSubmit as jest.Mock).mockReturnValueOnce(getMockedUseSubmit());
    const view = render(
      <InviteDialog {...mockedProps} />,
    );
    fireEvent.click(screen.getByTestId('submit-button'));
    expect(mockedUseFieldState.checkIfInfoInvalid).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(mockedUseSubmit.onSubmit).toHaveBeenCalledTimes(1));
    expect(mockedProps.onSuccess).toHaveBeenCalledTimes(1);
    expect(screen.getByText('You will be one of the first to experience Broccoli & Co.when we launch.')).toBeInTheDocument();
    view.unmount();
  });

  it('should not call submit when click button when exist input error', async () => {
    const mockedCheckIfInfoInvalid = jest.fn().mockReturnValueOnce(true);
    (useFieldState as jest.Mock).mockReturnValueOnce(getMockedUseFieldState({
      checkIfInfoInvalid: mockedCheckIfInfoInvalid,
    }));
    (useSubmit as jest.Mock).mockReturnValueOnce(getMockedUseSubmit());
    const view = render(
      <InviteDialog {...mockedProps} />,
    );
    fireEvent.click(screen.getByTestId('submit-button'));

    expect(mockedCheckIfInfoInvalid).toHaveBeenCalledTimes(1);
    expect(mockedUseSubmit.onSubmit).not.toHaveBeenCalled();
    view.unmount();
  });

  it('should show error helper text when get error from BE', async () => {
    const mockedErrorTip = 'helper text';
    (useFieldState as jest.Mock).mockReturnValueOnce(getMockedUseFieldState());
    (useSubmit as jest.Mock).mockReturnValueOnce(getMockedUseSubmit({
      errorTip: mockedErrorTip,
    }));
    const view = render(
      <InviteDialog {...mockedProps} />,
    );
    expect(screen.getByText(mockedErrorTip)).toBeInTheDocument();
    expect(screen.getByText(mockedErrorTip).textContent).toBe(mockedErrorTip);
    view.unmount();
  });
});
