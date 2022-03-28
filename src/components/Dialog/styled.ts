import styled from 'styled-components';
import { typography } from '../utils';

export const StyledContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 1300;
  //
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  &:after {
    width: 0;
    height: 100%;
    content: '';
    display: inline-block;
    vertical-align: middle;
  }
`;

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledDialogWrapper = styled.div`
  position:  absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  max-width: 440px;
  transform:  translate(-50%, -50%);
  z-index: 2;
`;

export const StyledDialogBox = styled.div`
  /* width: 450px; */
  /* min-height: 300px; */
  border-radius: 4px;
  background: #ffffff;
`;

export const StyledDialogTitle = styled.header`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${typography('title1')};
`;

export const StyledDialogContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 40px;
`;
