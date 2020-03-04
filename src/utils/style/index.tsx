import { css } from 'styled-components';
import { pxToRem } from 'utils';

export const BaseWrapper = css`
  width: 100%;
`;

export const BaseInner = css`
  max-width: ${pxToRem(1440)};
  width: 100%;

  padding: 0 ${pxToRem(24)};
  margin: auto;
`;

export const ThemeChangeTransition = css`
  transition: background-color 0.25s, color 0.25s;
`;

export * from './colors';
