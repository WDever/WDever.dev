import styled from 'styled-components';
import { pxToRem } from 'utils';
import { BaseInner, media } from 'utils/style';

export const Main = styled.main`
  width: 100%;
  min-height: calc(100vh - 160px - 88px - 56px - 3.5rem - 80px);

  margin-bottom: ${pxToRem(80)};
`;

export const Inner = styled.div`
  ${BaseInner};

  display: grid;

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
