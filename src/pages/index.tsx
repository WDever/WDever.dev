import React, { ReactElement } from 'react';
import { graphql } from 'gatsby';

import HomeTemplate from 'templates/home';
import Layout from '../components/layout/layout.component';
import SEO from '../components/seo';
import { BlogIndexQueryQuery } from '../types/graphqlTypes';

interface Props {
  data: BlogIndexQueryQuery;
  location: Location;
}

export default function BlogIndex({ data, location }: Props): ReactElement {
  const siteTitle: BlogIndexQueryQuery['site']['siteMetadata']['title'] =
    data.site.siteMetadata.title;
  const posts: BlogIndexQueryQuery['allMarkdownRemark']['edges'] =
    data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title='All posts' />
      <HomeTemplate posts={posts} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`;
