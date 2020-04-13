import React, { ReactElement } from 'react';
import { Link, graphql } from 'gatsby';
import {
  BlogPostBySlugQuery,
  ResultRemarkQueryQuery,
} from 'types/graphqlTypes';
import NavComponent from 'components/nav';
import Bio from '../../components/bio';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import { Wrapper } from './style';

interface Props {
  data: BlogPostBySlugQuery;
  pageContext: {
    isCreatedByStatefulCreatePages: boolean;
    slug: string;
    previous: ResultRemarkQueryQuery['allMarkdownRemark']['edges'][number]['node'];
    next: ResultRemarkQueryQuery['allMarkdownRemark']['edges'][number]['node'];
  };
  location: Location;
}

export default function BlogPostTemplate({
  data,
  pageContext,
  location,
}: Props): ReactElement {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;
  const postTitle = data.markdownRemark.frontmatter.title;

  const { tags, title, description, date } = post.frontmatter;

  return (
    <Layout
      location={location}
      title={siteTitle}
      selectedTags={tags}
      postTitle={postTitle}
    >
      <SEO title={title} description={description || post.excerpt} />
      <Wrapper>
        <header>
          <h1>{title}</h1>
          <p>{date}</p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <Bio />
        <NavComponent previous={previous} next={next} />
      </Wrapper>

      {/* <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel='prev'>
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel='next'>
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul> */}
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`;
