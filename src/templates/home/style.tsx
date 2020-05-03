import styled from 'styled-components';
import { pxToRem } from 'utils';
import { BaseInner, media } from 'utils/style';

export const Main = styled.main`
  width: 100%;

  margin-bottom: ${pxToRem(80)};

  /* padding: 0 ${pxToRem(32)};

  display: flex;
  justify-content: center; */
`;

export const Inner = styled.div`
  ${BaseInner};

  display: grid;

  /* grid-template-columns: ${(): string =>
    `repeat(auto-fill, ${pxToRem(412)})`};
  grid-template-rows: ${(): string => `repeat(auto-fill, ${pxToRem(416)})`}; */

  grid-template-columns: ${(): string => `repeat(auto-fill, ${pxToRem(412)})`};

  grid-row-gap: ${pxToRem(56)};

  grid-auto-rows: ${pxToRem(416)};

  ${media.tabletL} {
    grid-template-columns: ${(): string =>
      `repeat(auto-fill, ${pxToRem(340)})`};
    grid-auto-rows: ${pxToRem(360)};
  }

  ${media.phone} {
    grid-template-columns: repeat(auto-fill, 100%);
    grid-row-gap: ${pxToRem(24)};
  }

  justify-content: space-between;
`;
