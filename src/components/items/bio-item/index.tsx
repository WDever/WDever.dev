import React, { ReactElement, ReactNode } from 'react';

import { Wrapper } from './style';

interface Props {
  title: string;
  content: string;
  href: string;
  children: ReactNode;
}

export default function BioItemComponent({
  title,
  content,
  href,
  children,
}: Props): ReactElement {
  return (
    <Wrapper href={href} target='_blank'>
      <div>
        {children}
        <span> {title}</span>
      </div>
      {content}
    </Wrapper>
  );
}
