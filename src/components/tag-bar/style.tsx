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

  padding-top: ${pxToRem(32)};
  padding-bottom: ${pxToRem(16)};

  list-style: none;
`;
