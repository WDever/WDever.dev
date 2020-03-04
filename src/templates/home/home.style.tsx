import styled from 'styled-components';
import { pxToRem } from 'utils';
import { BaseInner } from 'utils/style';

export const Main = styled.main`
  width: 100%;

  margin-bottom: ${pxToRem(24)};
`;

export const Inner = styled.div`
  ${BaseInner}

  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;
