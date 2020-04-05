import styled from 'styled-components';
import { pxToRem } from 'utils';
import { CodeStyle } from 'utils/style';

export const Wrapper = styled.article`
  /* max-width: ${pxToRem(720)};
  width: ${pxToRem(720)}; */

  max-width: ${pxToRem(700)};
  width: ${pxToRem(700)};

  color: ${({ theme }): string => theme.mainFont};

  h1,
  h2 {
    border: none;
  }

  header {
    h1 {
      font-size: ${pxToRem(48)};

      line-height: 1.3;

      margin-top: ${pxToRem(24)};
      margin-bottom: ${pxToRem(16)};
    }

    p {
      font-size: ${pxToRem(14)};
    }
  }

  ${CodeStyle}
`;
