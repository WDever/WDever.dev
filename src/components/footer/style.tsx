import styled from 'styled-components';
import { Default } from 'utils/style';
import { pxToRem } from 'utils';

export const Wrapper = styled.footer`
  width: 100%;

  height: ${pxToRem(160)};

  background-color: ${({ theme }): string => theme.footer};

  color: ${({ theme }): string => theme.mainFont};

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Ubuntu';
  font-size: ${pxToRem(12)};
`;
