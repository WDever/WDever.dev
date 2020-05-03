import React, { ReactElement, useRef } from 'react';
import { useUtterances } from 'hooks/comment';
import { Wrapper } from './style';

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
