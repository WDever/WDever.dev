import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { pxToRem } from 'utils';
import { Default, media } from 'utils/style';

interface Props {
  tag: string;
}

export default function PostTagItemComponent({ tag }: Props): ReactElement {
  return <Wrapper>{tag}</Wrapper>;
}

const Wrapper = styled.li`
  height: ${pxToRem(24)};

  margin: 0;
  margin-right: ${pxToRem(6)};
  padding: ${pxToRem(1)} ${pxToRem(7)};

  :last-of-type {
    margin-right: 0;
  }

  display: inline-flex;
  align-items: center;
  line-height: 1;

  border-radius: ${pxToRem(8)};
  border: solid ${pxToRem(3)} ${Default.main};
  box-sizing: border-box;

  font-family: 'SpoqaHanSans';
  font-size: ${pxToRem(10)};
  font-weight: bold;
  color: ${Default.tagFont};

  background-color: ${Default.tagItem};

  ${media.tabletM} {
    font-size: ${pxToRem(8)};
  }
`;
