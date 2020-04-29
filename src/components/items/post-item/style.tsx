import styled from 'styled-components';
import { pxToRem } from 'utils';
import { Default, media } from 'utils/style';
import { Link } from 'gatsby';

export const Wrapper = styled.article`
  /* width: ${pxToRem(412)};
  height: ${pxToRem(416)}; */

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }): string => theme.item};
  box-shadow: ${({ theme }): string => theme.itemShadow};

  border-radius: ${pxToRem(8)};

  transition: box-shadow 0.3s;

  :hover {
    box-shadow: ${Default.postItemHoverShadow};
  }

  h1,
  h2,
  p {
    padding: 0;

    border: none;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: ${pxToRem(204)};

  margin: 0;

  border-top-left-radius: ${pxToRem(8)};
  border-top-right-radius: ${pxToRem(8)};

  cursor: pointer;
`;

export const PostInfoWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: ${pxToRem(10)} ${pxToRem(10)} ${pxToRem(24)} ${pxToRem(10)};

  ${media.tabletM} {
    padding-bottom: ${pxToRem(16)};
  }
`;

export const PostInfo = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TagList = styled.div`
  max-width: 70%;
`;

export const Date = styled.p`
  font-family: 'SpoqaHanSans';
  font-size: ${pxToRem(10)};
  color: ${Default.date};

  margin: 0;

  ${media.tabletM} {
    font-size: ${pxToRem(8)};
  }
`;

export const Title = styled.h1`
  margin: 0;
  margin-top: ${pxToRem(14)};

  max-height: ${pxToRem(70)};

  font-family: 'Gothic A1';
  font-size: ${pxToRem(30)};
  line-height: 1.3;

  text-overflow: ellipsis;
  overflow: hidden;

  display: flex;
  align-items: flex-start;

  cursor: pointer;

  ${media.tabletM} {
    font-size: ${pxToRem(24)};
    margin-top: ${pxToRem(6)};
  }
`;

export const Description = styled.h2`
  margin: 0;
  margin-top: ${pxToRem(16)};

  font-family: 'SpoqaHanSans';
  font-size: ${pxToRem(16)};
  font-weight: normal;
  color: ${({ theme }): string => theme.subFont};
  line-height: 1.7;

  cursor: pointer;

  ${media.tabletM} {
    font-size: ${pxToRem(12)};
    margin-top: ${pxToRem(10)};
  }
`;

export const StyledLink = styled(Link)<{ isTitle: boolean }>`
  box-shadow: none;
  color: ${({ theme, isTitle }): string =>
    isTitle ? theme.mainFont : theme.subFont};
`;

export const ImgLink = styled(Link)`
  height: ${pxToRem(204)};
  box-shadow: none;
`;
