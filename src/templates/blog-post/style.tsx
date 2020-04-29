import styled from 'styled-components';
import { pxToRem } from 'utils';
import { CodeStyle, Default, media } from 'utils/style';

export const Wrapper = styled.article`
  ${CodeStyle}

  max-width: ${pxToRem(700)};
  width: ${pxToRem(700)};

  color: ${({ theme }): string => theme.mainFont};

  line-height: 1.7;

  blockquote, h6 {
    color: ${({ theme }): string => theme.mainFont};

    border-color: ${Default.main};
  }

  section {
    h1, h2 {
      border-bottom: 1px solid ${({ theme }): string => theme.headerBorder}
    }
  }

  header {
    border-image: ${Default.gradient};
    border-image-slice: 1;
    border-bottom-style: solid;
    border-bottom-width: 3px;

    margin-bottom: ${pxToRem(32)};

    h1 {
      line-height: 1.3;

      border: none;
    }

    p {
      font-size: ${pxToRem(14)};

      margin-bottom: ${pxToRem(14)};
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

    margin-bottom: ${pxToRem(20)};
  }

  ${media.phone} {
    width: 100%;

    padding: 0 ${pxToRem(16)};
  }
`;
