import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { pxToRem } from 'utils';
import { useSiteMetadata } from 'hooks';

export default function FooterComponent(): ReactElement {
  // get author name from gatsby-config.js/sitemetadata
  const { siteMetadata } = useSiteMetadata();

  const {
    social: { gitHub },
    author,
  } = siteMetadata;

  return (
    <Wrapper>
      <strong>
        <a href={`https://${gitHub}`}>@{author}</a>, &nbsp;
      </strong>
      Built with &nbsp;
      <strong>
        <a href='https://github.com/WDever/gatsby-starter-devlog'>
          Gatsby-starter-devlog
        </a>
      </strong>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  width: 100%;
  height: ${pxToRem(160)};

  background-color: ${({ theme }): string => theme.footer};

  color: ${({ theme }): string => theme.mainFont};

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Ubuntu';
  font-size: ${pxToRem(12)};
`;
