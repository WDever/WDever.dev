import styled from 'styled-components';
import { pxToRem } from 'utils';
import { Default, BaseInner, media } from 'utils/style';

export const Wrapper = styled.nav`
  width: 100%;

  margin-bottom: ${pxToRem(56)};

  background-image: ${Default.gradient};

  ${media.phone} {
    margin-bottom: ${pxToRem(24)};
  }
`;

export const Inner = styled.ul`
  ${BaseInner}

  padding-top: ${pxToRem(32)};
  padding-bottom: ${pxToRem(16)};

  list-style: none;

  ${media.phone} {
    white-space: nowrap;

    overflow: scroll;

    padding-top: ${pxToRem(32)};
    padding-bottom: ${pxToRem(16)};
  }
`;
