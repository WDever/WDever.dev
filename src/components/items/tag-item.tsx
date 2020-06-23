import React, { ReactElement } from 'react';

import styled from 'styled-components';
import { pxToRem } from 'utils';
import { Default } from 'utils/style';

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

export const Wrapper = styled.li<{ selected: boolean }>`
  height: ${pxToRem(24)};

  margin: 0;
  margin-right: ${pxToRem(16)};
  margin-bottom: ${pxToRem(16)};
  padding: ${pxToRem(1)} ${pxToRem(7)};

  :last-of-type {
    margin-right: 0;
  }

  display: inline-flex;
  align-items: center;

  border-radius: ${pxToRem(8)};
  border: ${({ selected }): string =>
    selected
      ? `solid ${pxToRem(3)} ${Default.accent}`
      : `solid ${pxToRem(3)} transparent`};

  font-family: 'SpoqaHanSans';
  font-size: ${pxToRem(12)};
  font-weight: bold;

  cursor: pointer;

  background-color: ${Default.tagItem};
`;
