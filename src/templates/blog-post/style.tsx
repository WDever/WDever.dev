import styled from 'styled-components';
import { pxToRem } from 'utils';
import { CodeStyle, Default } from 'utils/style';

export const Wrapper = styled.article`
  ${CodeStyle}

  max-width: ${pxToRem(700)};
  width: ${pxToRem(700)};

  color: ${({ theme }): string => theme.mainFont};

  line-height: 1.9;

  blockquote, h6 {
    color: ${({ theme }): string => theme.mainFont};

    border-color: ${Default.main};
  }

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

  hr {
    background-image: ${Default.gradient};
    height: ${pxToRem(3)};

    margin-top: ${pxToRem(60)};
    margin-bottom: ${pxToRem(24)};
  }

  .tags {
    width: 100%;
    display: flex;

    margin: ${pxToRem(24)} 0;
  }
`;
