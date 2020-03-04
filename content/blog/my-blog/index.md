---
title: My Blog
# date: '2015-05-01T22:12:03.284Z'
date: '2020-02-22 02:16'
description: 'Hello World'
tags: ['#React', '#TypeScript']
---

I'll create my own blog and gatsby-starter

It will be named **WDever.dev**.

[Design of WDever.dev](https://www.figma.com/file/rMdyE0AV1gtSwZzHdQP91i/wdever.dev?node-id=22%3A2)

![Blog Logo](./images/icon-512x512.png 'Blog Logo')

```ts
import styled from 'styled-components';
import { pxToRem } from 'utils';
import { Default } from 'lib/style';

export const Wrapper = styled.li`
  height: ${pxToRem(24)};

  margin: 0;
  margin-right: ${pxToRem(16)};

  :last-of-type {
    margin-right: 0;
  }

  display: inline-flex;
  align-items: center;

  padding: ${pxToRem(4)} ${pxToRem(10)};
  font-family: 'SpoqaHanSans';
  font-size: ${pxToRem(12)};
  font-weight: bold;

  border-radius: ${pxToRem(8)};

  background-color: ${Default.tagItem};
`;
```
