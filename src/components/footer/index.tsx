import React, { ReactElement } from 'react';
import { Wrapper } from './style';

export default function FooterComponent(): ReactElement {
  return (
    <Wrapper>
      <strong>@WDever, &nbsp;</strong> Built with &nbsp;
      <strong> Gatsby-starter-blog</strong>
    </Wrapper>
  );
}
