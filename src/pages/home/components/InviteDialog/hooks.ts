import React, { useState } from 'react';
import { invite } from '@/network/api';
import { isEmail, isValidUsername } from '@/utils';
import { FieldType } from './types';
import { isNetworkError } from '@/network/types';

export const useFieldState = () => {
  const [userInfo, setUserInfo] = useState<Record<FieldType, string>>({
    name: '',
    email: '',
    confirmEmail: '',
  });
  const [infoError, setInfoError] = useState<Record<FieldType, boolean>>({
    name: false,
    email: false,
    confirmEmail: false,
  });

  const _updateInfoError = (key: FieldType, isError: boolean) => {
    setInfoError((info) => ({ ...info, ...{ [key]: isError } }));
  };

  const onChange = (key: FieldType) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUserInfo({ ...userInfo, ...{ [key]: value } });
    if (key === 'email') {
      _updateInfoError('confirmEmail', false);
      _updateInfoError('email', false);
    } else {
      _updateInfoError(key, false);
    }
  };

  const checkIfInfoValid = () => {
    let isUserInfoError = false;
    const { email, name, confirmEmail } = userInfo;

    if (!isValidUsername(name)) {
      _updateInfoError('name', true);
      isUserInfoError = true;
    }
    if (!isEmail(email)) {
      _updateInfoError('email', true);
      isUserInfoError = true;
    }
    if (!confirmEmail || email !== confirmEmail) {
      _updateInfoError('confirmEmail', true);
      isUserInfoError = true;
    }
    return isUserInfoError;
  };

  return {
    userInfo, infoError, onChange, checkIfInfoValid,
  };
};

export const useSubmit = (name: string, email: string) => {
  const [sendButtonLoading, setSendButtonLoading] = useState(false);
  const [errorTip, setErrorTip] = useState('');

  const onSubmit = async () => {
    setSendButtonLoading(true);
    try {
      await invite(name, email);
      return true;
    } catch (e) {
      if (isNetworkError<{errorMessage: string}>(e)) {
        setErrorTip(e.data.errorMessage);
      } else {
        setErrorTip('someting wrong...');
      }
      return false;
    } finally {
      setSendButtonLoading(false);
    }
  };

  return { sendButtonLoading, errorTip, onSubmit };
};
