import React, { ReactElement, useState } from 'react';
import { graphql } from 'gatsby';

import HomeTemplate from 'templates/home';
import TagBarComponent from 'components/tag-bar';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { BlogIndexQueryQuery } from '../types/graphqlTypes';

interface Props {
  data: BlogIndexQueryQuery;
  location: Location;
}

export default function BlogIndex({ data, location }: Props): ReactElement {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const siteTitle: BlogIndexQueryQuery['site']['siteMetadata']['title'] =
    data.site.siteMetadata.title;
  const posts: BlogIndexQueryQuery['allMarkdownRemark']['edges'] =
    data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle} selectedTags={selectedTags}>
      <SEO title='Home' />
      <TagBarComponent
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
      <HomeTemplate posts={posts} selectedTags={selectedTags} />
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
          excerpt(pruneLength: 100)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            description
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
