import React, { ReactElement } from 'react';
import NavItemComponent from 'components/items/nav-item';
import { SitePageContext } from 'types';
import { Wrapper } from './style';

interface Props {
  previous: SitePageContext['previous'];
  next: SitePageContext['next'];
}

export default function NavComponent({ previous, next }: Props): ReactElement {
  if (previous === null && next === null) {
    return <Wrapper />;
  }

  if (previous === null) {
    return (
      <Wrapper onlyNext>
        <NavItemComponent data={next} isNext />
      </Wrapper>
    );
  }

  if (next === null) {
    return (
      <Wrapper>
        <NavItemComponent data={previous} isNext={false} />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <NavItemComponent data={previous} isNext={false} />
      <NavItemComponent data={next} isNext />
    </Wrapper>
  );
}
