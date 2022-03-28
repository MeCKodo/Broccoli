import styled from 'styled-components';

const HEADER_HEIGHT = 80;

const StyledLayout = styled.div`
  padding: ${HEADER_HEIGHT}px 0 0;
  min-height: 100vh;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  box-shadow: 2px 0 25px #e8e8e8;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  background-color: #fff;
`;

const StyledMainWrapper = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 32px;
`;

const StyledFooterWrapper = styled.footer`
  width: 100%;
  height: 80px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  StyledLayout,
  StyledHeaderWrapper,
  StyledMainWrapper,
  StyledFooterWrapper,
};
