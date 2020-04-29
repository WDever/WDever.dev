import styled from 'styled-components';
import { pxToRem } from 'utils';
import { Default, media } from 'utils/style';

export const Wrapper = styled.a`
  width: ${pxToRem(218)};
  height: ${pxToRem(64)};

  color: unset;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }): string => theme.item};

  border-radius: ${pxToRem(8)};

  transition: box-shadow 0.3s;

  cursor: pointer;

  padding: ${pxToRem(10)};

  :hover {
    box-shadow: ${Default.postItemHoverShadow};
  }

  div {
    display: flex;
    align-items: center;

    font-family: 'Ubuntu';
    font-size: ${pxToRem(10)};
    font-weight: normal;

    margin-bottom: ${pxToRem(4)};

    span {
      margin-left: ${pxToRem(4)};
    }
  }

  .content {
    font-family: 'SpoqaHanSans';
    font-size: ${pxToRem(16)};
    font-weight: bold;

    ${media.phone} {
      display: none;
    }
  }

  ${media.phone} {
    width: auto;
    height: auto;

    padding: ${pxToRem(8)};

    margin-right: ${pxToRem(16)};

    :last-of-type {
      margin-right: 0;
    }

    span {
      display: none;
    }
  }
`;
