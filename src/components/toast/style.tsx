import styled, { keyframes } from 'styled-components';
import { pxToRem } from 'utils';

const ToastAnimation = keyframes`
  from {
    top: ${pxToRem(-(16 + 48))}
  }

  to {
    top: ${pxToRem(16)}
  }
`;

export const Wrapper = styled.section<{ timeout: number }>`
  position: fixed;

  top: ${pxToRem(16)};
  margin: 0 auto;

  height: ${pxToRem(48)};

  background-color: ${({ theme }): string => theme.item};

  box-shadow: ${({ theme }): string => theme.itemShadow};

  border-radius: ${pxToRem(8)};

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'SpoqaHanSans';
  font-size: ${pxToRem(14)};
  color: ${({ theme }): string => theme.mainFont};

  animation-name: ${ToastAnimation};
  animation-duration: ${({ timeout }): string => `${timeout / 2}s`};
  animation-iteration-count: 2;
  animation-direction: alternate;

  z-index: 10;
`;

export const Message = styled.p`
  width: auto;

  margin: 0 ${pxToRem(16)};
`;
