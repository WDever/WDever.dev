import React, { ReactElement } from 'react';
import { SitePageContext } from 'types';
import { Wrapper } from './style';

interface Props {
  data: SitePageContext['previous'] | SitePageContext['next'];
  isNext: boolean;
}

export default function NavItemComponent({
  data,
  isNext,
}: Props): ReactElement {
  const { title } = data.frontmatter;
  const { slug } = data.fields;

  return (
    <Wrapper isNext={isNext} to={slug}>
      <h1>{title}</h1>
      <p className='guide'>{isNext ? 'Next post →' : '← Previous Post'}</p>
    </Wrapper>
  );
}
