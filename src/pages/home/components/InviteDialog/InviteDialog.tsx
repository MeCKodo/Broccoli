import * as S from './styled';
import { Dialog } from '@/components/Dialog';
import { TextField } from '@/components/TextField';
import { HelperText } from '@/components/HelperText';
import { Button } from '@/components/Button';
import { useFieldState, useSubmit } from './hooks';

type Props = {
  onSuccess: () => void;
  onClose: () => void;
}

const SuccessDialogContent = (props: { onClick: () => void }) => {
  const { onClick } = props;
  return (
    <>
      <S.StyledSuccessText>
        You will be one of the first to experience Broccoli & Co.when we launch.
      </S.StyledSuccessText>
      <Button size="large" onClick={onClick}>OK</Button>
    </>
  );
};

const InviteDialog = (props: Props) => {
  const { onSuccess, onClose } = props;
  const {
    userInfo, infoError, onChange, checkIfInfoInvalid,
  } = useFieldState();
  const { sendButtonLoading, errorTip, onSubmit } = useSubmit(userInfo.name, userInfo.email);

  const _onSubmit = async () => {
    const isInfoInvalid = checkIfInfoInvalid();
    if (isInfoInvalid) {
      return;
    }
    const res = await onSubmit();
    if (res) {
      onSuccess();
      const { dismiss } = Dialog.show({
        title: 'All Done!',
        children: <SuccessDialogContent onClick={() => dismiss()} />,
      });
    }
  };

  return (
    <Dialog
      open
      title="Request an invite"
      onClose={onClose}
    >
      <S.StyledInputWrapper>
        <TextField
          value={userInfo.name}
          onChange={onChange('name')}
          placeholder="Full name"
          isError={infoError.name}
          helperText={
            infoError.name
              ? 'Full name needs to be at least 3 characters long'
              : ''
          }
        />
        <TextField
          value={userInfo.email}
          onChange={onChange('email')}
          placeholder="Email"
          isError={infoError.email}
          helperText={infoError.email ? 'Email is illegal' : ''}
        />
        <TextField
          value={userInfo.confirmEmail}
          onChange={onChange('confirmEmail')}
          placeholder="Confirm email"
          isError={infoError.confirmEmail}
          helperText={
            infoError.confirmEmail ? 'Confirm Email needs to match Email' : ''
          }
        />
      </S.StyledInputWrapper>
      <S.StyledButtonWrapper>
        <Button
          size="large"
          onClick={_onSubmit}
          loading={sendButtonLoading}
          loadingText="Sending, please wait..."
          disabled={sendButtonLoading}
          data-testid="submit-button"
        >
          Send
        </Button>
        {errorTip && <HelperText type="error">{errorTip}</HelperText>}
      </S.StyledButtonWrapper>
    </Dialog>
  );
};

export { InviteDialog };
