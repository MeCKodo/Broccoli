import { useState } from 'react';
import * as S from './styled';
import { Button } from '@/components/Button';
import { InviteDialog } from '../InviteDialog';

const MainContent = () => {
  const [showField, setShowField] = useState(false);

  return (
    <S.StyledMainContentWrapper>
      <S.StyledWelcomeStatement>
        A better way
      </S.StyledWelcomeStatement>
      <S.StyledWelcomeStatement>
        to enjoy every day.
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
        }}
      />
      )}
    </S.StyledMainContentWrapper>
  );
};

export { MainContent };
