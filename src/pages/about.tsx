import React, { ReactElement } from 'react';
import BioComponent from 'components/bio';
import Layout from 'components/layout';
import { graphql } from 'gatsby';
import { AboutPageQueryQuery } from 'types';
import { pxToRem } from 'utils';
import styled from 'styled-components';
import { Default, media } from 'utils/style';

interface Props {
  location: Location;
  data: AboutPageQueryQuery;
}

export default function AboutPage({ location, data }: Props): ReactElement {
  const { html, frontmatter } = data.allMarkdownRemark.edges[0].node;

  const { title, tags } = frontmatter;

  return (
    <Layout location={location} selectedTags={tags} title={title}>
      <BioWrapper>
        <BioComponent />
      </BioWrapper>
      <Wrapper dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query AboutPageQuery {
    allMarkdownRemark(filter: { frontmatter: { tags: { in: "#About" } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            date(formatString: "YYYY년 MM월 DD일")
            tags
          }
        }
      }
    }
  }
`;

export const Wrapper = styled.article`
  max-width: ${pxToRem(700)};
  width: ${pxToRem(700)};

  margin-top: ${pxToRem(56)};
  margin-bottom: ${pxToRem(100)};

  color: ${({ theme }): string => theme.mainFont};

  ${media.phone} {
    width: 100%;

    padding: 0 ${pxToRem(16)};
  }

  h1,
  h2 {
    border: none;
  }

  header {
    h1 {
      font-size: ${pxToRem(48)};

      line-height: 1.3;

      margin-top: ${pxToRem(24)};
      margin-bottom: ${pxToRem(16)};
    }

    p {
      font-size: ${pxToRem(14)};
    }
  }

  hr {
    background-image: ${Default.gradient};
    height: ${pxToRem(3)};

    margin-top: ${pxToRem(60)};
    margin-bottom: ${pxToRem(24)};
  }
`;

const BioWrapper = styled(Wrapper)`
  margin-bottom: 0;
`;
