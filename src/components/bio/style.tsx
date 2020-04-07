import styled from 'styled-components';
import { pxToRem } from 'utils';
import GatsbyImage from 'gatsby-image';
import { Default } from 'utils/style';

export const Wrapper = styled.div`
  width: 100%;
  height: ${pxToRem(198)};

  border-radius: ${pxToRem(8)};

  background-color: ${({ theme }): string => theme.bio};

  padding: ${pxToRem(16)};

  display: flex;
  flex-direction: column;

  div {
    display: inherit;
  }

  .contacts {
    justify-content: space-between;
  }
`;

export const Image = styled(GatsbyImage)`
  min-width: ${pxToRem(86)};
  min-height: ${pxToRem(86)};

  border-radius: 50%;

  margin-right: ${pxToRem(20)};

  img {
    margin: 0;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;

  margin-bottom: ${pxToRem(16)};

  justify-content: space-between;

  .introduction {
    flex-direction: column;

    h1 {
      font-size: ${pxToRem(20)};
      line-height: 1.6;

      padding: 0;
      margin: 0;

      font-family: 'SpoqaHanSans';

      margin-bottom: ${pxToRem(12)};
      span {
        color: ${Default.main};
      }
    }

    h2 {
      font-size: ${pxToRem(16)};
      font-weight: normal;

      font-family: 'SpoqaHanSans';

      margin: 0;
      padding: 0;
    }
  }
`;

export const Button = styled.button`
  display: flex;

  width: ${pxToRem(148)};
  height: ${pxToRem(48)};

  border-radius: ${pxToRem(8)};

  background-color: ${Default.accent};

  border: none;
  outline: none;

  font-family: 'SpoqaHanSans';
  font-size: ${pxToRem(12)};

  padding: ${pxToRem(14)} 0 ${pxToRem(14)} ${pxToRem(14)};

  cursor: pointer;

  span {
    width: ${pxToRem(20)};
    font-size: ${pxToRem(20)};
    line-height: 0.9;

    margin-right: ${pxToRem(12)};
  }
`;
