import React, { ReactElement } from 'react';
import { Wrapper } from './style';

interface Props {
  tag: string;
  selected: boolean;
  selectTag: (tag: string) => void;
}

export default function TagItemComponent({
  tag,
  selected,
  selectTag,
}: Props): ReactElement {
  const onClick = (): void => selectTag(tag);

  return (
    <Wrapper onClick={onClick} selected={selected}>
      {tag}
    </Wrapper>
  );
}
