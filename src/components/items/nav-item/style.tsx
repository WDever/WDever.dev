import styled from 'styled-components';
import { pxToRem } from 'utils';
import { Default } from 'utils/style';
import { Link } from 'gatsby';

export const Wrapper = styled(Link)<{ isNext: boolean }>`
  width: ${pxToRem(342)};
  height: ${pxToRem(152)};

  text-decoration: none;

  display: flex;
  flex-direction: column;

  font-family: 'SpoqaHanSans';

  box-shadow: ${({ theme }): string => theme.itemShadow};

  border-radius: ${pxToRem(8)};

  margin-top: ${pxToRem(20)};
  margin-bottom: ${pxToRem(56)};

  padding: ${pxToRem(16)} ${pxToRem(20)};

  p {
    color: ${Default.main};

    margin: 0;
  }

  .post-info {
    display: flex;
    justify-content: space-between;

    p {
      font-size: ${pxToRem(10)};
    }
  }

  .date {
    color: ${Default.date};
  }

  h1 {
    font-size: ${pxToRem(24)};
    color: ${({ theme }): string => theme.mainFont};

    height: ${pxToRem(62)};
    max-height: ${pxToRem(62)};

    text-overflow: ellipsis;
    overflow: hidden;

    margin-top: ${pxToRem(16)};
    margin-bottom: ${pxToRem(14)};
    padding: 0;
  }

  .guide {
    font-size: ${pxToRem(12)};

    text-align: ${({ isNext }): string => (isNext ? 'end' : 'start')};
  }
`;
