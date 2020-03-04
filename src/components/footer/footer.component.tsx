import React, { ReactElement } from 'react';
import { Wrapper } from './footer.style';

export default function FooterComponent(): ReactElement {
  return (
    <Wrapper>
      <strong>@WDever, &nbsp;</strong> Built with &nbsp;
      <strong> Gatsby-starter-devlog</strong>
    </Wrapper>
  );
}
