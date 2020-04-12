import React, { ReactElement } from 'react';
import { Wrapper } from './style';

interface Props {
  tag: string;
  tagNotifierClick: () => void;
}

export default function HeaderTagItemComponent({
  tag,
  tagNotifierClick,
}: Props): ReactElement {
  return (
    <Wrapper selected onClick={tagNotifierClick}>
      {tag}
    </Wrapper>
  );
}
