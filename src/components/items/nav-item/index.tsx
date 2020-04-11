import React, { ReactElement } from 'react';
import { ResultRemarkQueryQuery } from 'types';
import { Wrapper } from './style';

interface Props {
  data: ResultRemarkQueryQuery['allMarkdownRemark']['edges'][number]['node'];
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
      <section className='post-info'>
        <p>React</p>
        <p className='date'>2020-01-01</p>
      </section>
      <h1>{title}</h1>
      <p className='guide'>{isNext ? 'Next post →' : '← Previous Post'}</p>
    </Wrapper>
  );
}
