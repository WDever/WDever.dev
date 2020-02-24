import React, { ReactElement } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout.component';
import SEO from '../components/seo';
import { NotFoundPageQueryQuery } from '../types/graphqlTypes';

interface NotFoundPageProps {
  data: NotFoundPageQueryQuery;
  location: Location;
}

export default function NotFoundPage({
  data,
  location,
}: NotFoundPageProps): ReactElement {
  const siteTitle: NotFoundPageQueryQuery['site']['siteMetadata']['title'] =
    data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title='404: Not Found' />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
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
