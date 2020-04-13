import styled from 'styled-components';
import { pxToRem } from 'utils';

export const Wrapper = styled.section`
  width: ${pxToRem(700)};

  margin-bottom: ${pxToRem(300)};

  color: ${({ theme }): string => theme.mainFont};
`;