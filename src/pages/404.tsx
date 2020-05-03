import React, { ReactElement } from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { pxToRem } from 'utils';
import { Default, media } from 'utils/style';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { NotFoundPageQueryQuery } from '../types/graphqlTypes';

interface Props {
  data: NotFoundPageQueryQuery;
  location: Location;
}

export default function NotFoundPage({ data, location }: Props): ReactElement {
  const siteTitle: NotFoundPageQueryQuery['site']['siteMetadata']['title'] =
    data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle} selectedTags={[]}>
      <SEO title='404: Not Found' />
      <Wrapper>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <h3>찾으시는 페이지가 없습니다.</h3>
        <HomeBtn to='/'>홈으로</HomeBtn>
      </Wrapper>
    </Layout>
  );
}

export const pageQuery = graphql`
  query NotFoundPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export const Wrapper = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: 'SpoqaHanSans';

  h1,
  h2,
  h3 {
    padding: 0;
  }

  h1 {
    font-size: ${pxToRem(240)};
    color: ${Default.main};
    font-family: inherit;

    margin: 0;
    margin-bottom: ${pxToRem(24)};

    ${media.phone} {
      font-size: ${pxToRem(120)};
    }
  }

  h2 {
    font-size: ${pxToRem(36)};
    font-family: inherit;
    color: ${({ theme }): string => theme.mainFont};

    margin: 0;
    margin-bottom: ${pxToRem(18)};

    ${media.phone} {
      font-size: ${pxToRem(24)};
    }
  }

  h3 {
    font-size: ${pxToRem(24)};
    font-weight: normal;
    font-family: inherit;
    color: ${({ theme }): string => theme.mainFont};

    margin: 0;
    margin-bottom: ${pxToRem(42)};

    ${media.phone} {
      font-size: ${pxToRem(20)};
    }
  }
`;

export const HomeBtn = styled(Link)`
  width: ${pxToRem(140)};
  height: ${pxToRem(60)};

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  font-size: ${pxToRem(24)};
  font-family: inherit;
  color: ${({ theme }): string => theme.mainFont};

  border-radius: ${pxToRem(8)};

  background-color: ${({ theme }): string => theme.item};

  box-shadow: ${({ theme }): string => theme.itemShadow};
`;
