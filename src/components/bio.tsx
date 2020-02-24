/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactElement } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';
import { BioQueryQuery } from '../types/graphqlTypes';

const Wrapper = styled.div`
  display: flex;
  margin-bottom: ${rhythm(2.5)};
`;

export default function Bio(): ReactElement {
  const data: BioQueryQuery = useStaticQuery<BioQueryQuery>(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            instagram
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;

  return (
    <Wrapper>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Written by <strong>{author}</strong> who lives and works in San
        Francisco building useful things.
        <a
          rel='noopener noreferrer'
          target='_blank'
          href={`${social.instagram}`}
        >
          You should follow him on Instagram
        </a>
      </p>
    </Wrapper>
  );
}
