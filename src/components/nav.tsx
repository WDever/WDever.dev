import React, { ReactElement } from 'react';
import NavItemComponent from 'components/items/nav-item';
import { SitePageContext } from 'types';
import styled from 'styled-components';
import { pxToRem } from 'utils';
import { media } from 'utils/style';

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

export const Wrapper = styled.nav<{ onlyNext?: boolean }>`
  width: 100%;

  margin-top: ${pxToRem(20)};

  display: flex;
  justify-content: ${({ onlyNext }): string =>
    onlyNext ? 'flex-end' : 'space-between'};

  ${media.phone} {
    flex-direction: column-reverse;
    justify-content: flex-start;

    margin: ${pxToRem(32)} 0;
  }
`;
