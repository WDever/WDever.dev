import React, { ReactElement } from 'react';
import NavItemComponent from 'components/items/nav-item';
import { ResultRemarkQueryQuery } from 'types';
import { Wrapper } from './style';

interface Props {
  previous: ResultRemarkQueryQuery['allMarkdownRemark']['edges'][number]['node'];
  next: ResultRemarkQueryQuery['allMarkdownRemark']['edges'][number]['node'];
}

export default function NavComponent({ previous, next }: Props): ReactElement {
  if (previous === null) {
    return <NavItemComponent data={next} isNext />;
  }

  if (next === null) {
    return <NavItemComponent data={previous} isNext={false} />;
  }

  return (
    <Wrapper>
      <NavItemComponent data={previous} isNext={false} />
      <NavItemComponent data={next} isNext />
    </Wrapper>
  );
}
