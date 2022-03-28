import { renderHook, act, cleanup } from '@testing-library/react-hooks';
import { useSubmit, useFieldState } from '../hooks';
import * as apis from '@/network/api';
import * as networkTypes from '@/network/types';

describe('inviteDialog/hooks/useFieldState', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
    cleanup();
  });

  const mockedValue = 'value';

  function getReactChangeEvent() {
    return { target: { value: mockedValue } } as React.ChangeEvent<HTMLInputElement>;
  }

  it('should update value correctly when call function onChange with key', () => {
    const { result } = renderHook(() => useFieldState());
    expect(result.current.userInfo).toEqual({
      name: '',
      email: '',
      confirmEmail: '',
    });

    // check name field
    act(() => { result.current.onChange('name')(getReactChangeEvent()); });
    expect(result.current.userInfo.name).toBe(mockedValue);

    // check email field
    act(() => { result.current.onChange('email')(getReactChangeEvent()); });
    expect(result.current.userInfo.email).toBe(mockedValue);

    // check confirmEmail field
    act(() => { result.current.onChange('confirmEmail')(getReactChangeEvent()); });
    expect(result.current.userInfo.confirmEmail).toBe(mockedValue);
  });

  it('should reset related error to true when call update userInfo with key', () => {
    const { result } = renderHook(() => useFieldState());
    // 所有info error默认为false
    expect(result.current.infoError).toEqual({
      name: false,
      email: false,
      confirmEmail: false,
    });

    // 设置所有info error为true
    act(() => { result.current.checkIfInfoInvalid(); });
    expect(result.current.infoError).toEqual({
      name: true,
      email: true,
      confirmEmail: true,
    });

    // check name field
    act(() => { result.current.onChange('name')(getReactChangeEvent()); });
    expect(result.current.infoError.name).toBeFalsy();

    // check email field
    // 当update email时，应将email和confirmEmail的info error设为false
    act(() => { result.current.onChange('email')(getReactChangeEvent()); });
    expect(result.current.infoError.email).toBeFalsy();
    expect(result.current.infoError.email).toBeFalsy();

    // check confirmEmail filed
    // 将email & confirmEmail的info error设为false
    act(() => { result.current.checkIfInfoInvalid(); });
    expect(result.current.infoError).toEqual({
      name: false,
      email: true,
      confirmEmail: true,
    });
    act(() => { result.current.onChange('confirmEmail')(getReactChangeEvent()); });
    expect(result.current.infoError.confirmEmail).toBeFalsy();
  });
});

describe('inviteDialog/hooks/useSubmit', () => {
  const commonErrorMsg = 'something wrong...';
  const networkErrorMsg = 'network error data message';
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
    cleanup();
  });
  jest.setTimeout(10000);
  it('should send invite request successfully after called', async () => {
    const mockedName = 'name';
    const mockedEmail = 'email';
    const mockedInviteAPI = jest.spyOn(apis, 'invite');
    const { result } = renderHook(() => useSubmit(mockedName, mockedEmail));

    expect(result.current.errorTip).toBe('');
    expect(result.current.sendButtonLoading).toBeFalsy();

    await act(async () => { await result.current.onSubmit(); });

    expect(mockedInviteAPI).toHaveBeenCalledWith(mockedName, mockedEmail);
    // @ts-ignore
    expect(result.all[1].sendButtonLoading).toBe(true);
    // @ts-ignore
    expect(result.all[2].sendButtonLoading).toBe(false);
  });

  it.each`
      isNetworkError |  status | expectedErrorTip
      ${true} |  ${400} | ${networkErrorMsg}
      ${true} |  ${500} | ${commonErrorMsg}
      ${false} |  ${400} | ${commonErrorMsg}
      ${false} |  ${500} | ${commonErrorMsg}
    `('should show error tip correctly when get error after function onSubmit called', async ({ isNetworkError, status, expectedErrorTip }) => {
    const mockedName = 'name';
    const mockedEmail = 'email';
    const mockedIsNetworkError = jest.spyOn(networkTypes, 'isNetworkError');
    const mockedError = { data: { errorMessage: networkErrorMsg }, statusText: 'placeholder', status };
    const mockedInviteAPI = jest.spyOn(apis, 'invite').mockRejectedValue(mockedError);
    const { result } = renderHook(() => useSubmit(mockedName, mockedEmail));
    expect(result.current.errorTip).toBe('');
    expect(result.current.sendButtonLoading).toBeFalsy();

    mockedIsNetworkError.mockReturnValue(isNetworkError);
    await act(async () => { await result.current.onSubmit(); });

    expect(mockedInviteAPI).toHaveBeenCalledWith(mockedName, mockedEmail);
    expect(result.current.errorTip).toBe(expectedErrorTip);
    expect(result.current.sendButtonLoading).toBeFalsy();
  });
});
