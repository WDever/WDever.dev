import React, { ReactElement } from 'react';
import { Wrapper } from './style';

interface Props {
  tag: string;
}

export default function PostTagItemComponent({ tag }: Props): ReactElement {
  return <Wrapper>{tag}</Wrapper>;
}
