import React, { ReactElement } from 'react';
import { Wrapper } from './post-tag-item.style';

interface Props {
  tag: string;
}

export default function PostTagItemComponent({ tag }: Props): ReactElement {
  return <Wrapper>{tag}</Wrapper>;
}
