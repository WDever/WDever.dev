import styled from 'styled-components';
import { pxToRem } from 'utils';
import { BaseInner } from 'utils/style';

export const Main = styled.main`
  width: 100%;

  margin-bottom: ${pxToRem(80)};
`;

export const Inner = styled.div`
  ${BaseInner};

  display: grid;

  grid-template-columns: ${(): string => `repeat(3, ${pxToRem(412)})`};
  grid-row-gap: ${pxToRem(56)};

  justify-content: space-between;
`;
