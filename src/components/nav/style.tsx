import styled from 'styled-components';
import { pxToRem } from 'utils';

export const Wrapper = styled.nav`
  width: 100%;

  margin-top: ${pxToRem(20)};

  display: flex;
  justify-content: space-between;
`;
