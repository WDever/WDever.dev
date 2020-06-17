import styled from 'styled-components';
import { pxToRem } from 'utils';
import { media } from 'utils/style';

export const Wrapper = styled.nav<{ onlyNext?: boolean }>`
  width: 100%;

  margin-top: ${pxToRem(20)};

  display: flex;
  justify-content: ${({ onlyNext }): string =>
    onlyNext ? 'flex-end' : 'space-between'};

  ${media.phone} {
    flex-direction: column-reverse;
    justify-content: flex-start;

    margin: ${pxToRem(32)} 0;
  }
`;
