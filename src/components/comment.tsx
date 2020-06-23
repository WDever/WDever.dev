import React, { ReactElement, useRef } from 'react';
import { useUtterances } from 'hooks';
import styled from 'styled-components';
import { pxToRem } from 'utils';

export default function CommentComponent({
  location,
}: {
  location: Location;
}): ReactElement {
  const ref = useRef<HTMLElement>(null);

  const { loading } = useUtterances(ref);

  const { pathname } = location;

  if (pathname.length <= 1) {
    return <></>;
  }
  return <Wrapper ref={ref}>{loading && <h1>Loading Comments</h1>}</Wrapper>;
}

const Wrapper = styled.section`
  width: 100%;

  margin-bottom: ${pxToRem(300)};

  color: ${({ theme }): string => theme.mainFont};
`;
