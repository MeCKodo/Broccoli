import { useState } from 'react';
import * as S from './styled';
import { Button } from '@/components/Button';
import { InviteDialog } from '../InviteDialog';
import { Dialog } from '@/components/Dialog';

const SuccessDialog = (props: { onClick: () => void }) => {
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

const MainContent = () => {
  const [showField, setShowField] = useState(false);

  return (
    <S.StyledMainContentWrapper>
      <S.StyledWelcomeStatement>
        A better way to enjoy everyday.
      </S.StyledWelcomeStatement>
      <S.StyledMessage>Be the first to know when we launch.</S.StyledMessage>
      <Button size="large" onClick={() => setShowField(true)}>Request an invite</Button>
      {showField && (
      <InviteDialog
        onClose={() => {
          setShowField(false);
        }}
        onSuccess={() => {
          setShowField(false);
          const { dismiss } = Dialog.show({
            title: 'All Done!',
            children: <SuccessDialog onClick={() => dismiss()} />,
          });
        }}
      />
      )}
    </S.StyledMainContentWrapper>
  );
};

export { MainContent };
