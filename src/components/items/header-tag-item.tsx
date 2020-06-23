import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { pxToRem } from 'utils';
import { media } from 'utils/style';
import { Wrapper as BaseWrapper } from './tag-item';

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

const Wrapper = styled(BaseWrapper)`
  margin: 0;
  margin-right: ${pxToRem(4)};

  ${media.phone} {
    display: none;
  }
`;
