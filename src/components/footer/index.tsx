import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { pxToRem } from 'utils';

export default function FooterComponent(): ReactElement {
  return (
    <Wrapper>
      <strong>@WDever, &nbsp;</strong> Built with &nbsp;
      <strong>Gatsby-starter-blog</strong>
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
