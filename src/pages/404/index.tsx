import React, { ReactElement } from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import { NotFoundPageQueryQuery } from '../../types/graphqlTypes';
import { Wrapper, HomeBtn } from './style';

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
