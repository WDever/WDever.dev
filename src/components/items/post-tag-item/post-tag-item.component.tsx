import React, { ReactElement } from 'react';
import { Wrapper } from './post-tag-item.style';

interface Props {
  tag: string;
  // selected: boolean;
}

export default function TagItemComponent({ tag }: Props): ReactElement {
  return <Wrapper>{tag}</Wrapper>;
}
