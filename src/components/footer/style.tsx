import styled from 'styled-components';
import { Default } from 'utils/style';
import { pxToRem } from 'utils';

export const Wrapper = styled.footer`
  width: 100%;

  height: ${pxToRem(160)};

  /* background-image: ${Default.reverseGradient}; */
  background-color: #f0f0f0;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Ubuntu';
  font-size: ${pxToRem(12)};
`;
