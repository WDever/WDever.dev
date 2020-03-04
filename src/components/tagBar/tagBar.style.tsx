import styled from 'styled-components';
import { pxToRem } from 'utils';
import { Default, BaseInner } from 'utils/style';

export const Wrapper = styled.nav`
  width: 100%;

  margin-bottom: ${pxToRem(56)};

  background-image: ${Default.gradient};
`;

export const Inner = styled.ul`
  ${BaseInner}

  display: flex;
  align-items: center;
  flex-flow: row wrap;

  padding: ${pxToRem(32)} ${pxToRem(24)} ${pxToRem(16)} ${pxToRem(24)};

  list-style: none;
`;
