import styled from 'styled-components';
import { pxToRem } from 'utils';
import { CodeStyle, Default, media } from 'utils/style';
import React, { ReactElement } from 'react';
import { graphql } from 'gatsby';
import { BlogPostBySlugQuery, SitePageContext } from 'types/graphqlTypes';
import NavComponent from 'components/nav';
import PostTagItemComponent from 'components/items/post-tag-item';
import CommentComponent from 'components/comment';
import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';

interface Props {
  data: BlogPostBySlugQuery;
  pageContext: SitePageContext;
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

  const tagList = tags.map((item, i) => (
    <PostTagItemComponent tag={item} key={i} />
  ));

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
          <section className='tags'>{tagList}</section>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <Bio />
        <NavComponent previous={previous} next={next} />
        <CommentComponent location={location} />
      </Wrapper>
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
        date(formatString: "YYYY년 MM월 DD일")
        description
        tags
      }
    }
  }
`;

export const Wrapper = styled.article`
  ${CodeStyle}

  max-width: ${pxToRem(700)};
  width: ${pxToRem(700)};

  color: ${({ theme }): string => theme.mainFont};

  line-height: 1.7;

  ${media.phone} {
    width: 100%;

    padding: 0 ${pxToRem(16)};
  }

  .gatsby-resp-image-figcaption {
    text-align: center;
    color: ${({ theme }): string => theme.subFont};
    font-size: ${pxToRem(12)};
  }

  blockquote, h6 {
    color: ${({ theme }): string => theme.mainFont};

    border-color: ${Default.main};
  }

  section {
    h1, h2 {
      border-bottom: 1px solid ${({ theme }): string => theme.headerBorder}
    }
  }

  header {
    border-image: ${Default.gradient};
    border-image-slice: 1;
    border-bottom-style: solid;
    border-bottom-width: 1px;

    margin-bottom: ${pxToRem(32)};

    h1 {
      line-height: 1.3;

      border: none;
    }

    p {
      font-size: ${pxToRem(14)};

      margin-bottom: ${pxToRem(14)};
    }
  }

  hr {
    background-image: ${Default.gradient};
    height: ${pxToRem(3)};

    margin-top: ${pxToRem(60)};
    margin-bottom: ${pxToRem(24)};
  }

  .tags {
    width: 100%;
    display: flex;

    margin-bottom: ${pxToRem(20)};
  }

  th, td {
    border-color: ${({ theme }): string => theme.headerBorder}
  }
`;
