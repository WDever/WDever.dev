import { css } from 'styled-components';
import { pxToRem } from 'utils';
import { media } from './mediaQuery';

export const BaseWrapper = css`
  width: 100%;
`;

export const BaseInner = css`
  max-width: ${pxToRem(1440)};
  width: 100%;

  padding: 0 ${pxToRem(32)};
  margin: auto;

  ${media.phone} {
    padding: 0 ${pxToRem(16)};
  }
`;

export const ThemeChangeTransition = css`
  transition: background-color 0.25s, color 0.25s;
`;

export const CodeStyle = css`
  pre,
  code {
    font-family: JetBrainsMono, Hack, 'Fira Code', 'Consolas', 'Monaco',
      'Andale Mono', 'Ubuntu Mono', monospace;

    text-shadow: none;

    span {
      background: none;
    }
  }

  code[class*='language-text'] {
    border-radius: ${pxToRem(4)};
    background-color: rgba(68, 112, 255, 0.4);
    padding: ${pxToRem(1.5)} ${pxToRem(4)};

    font-size: ${pxToRem(16)};
    color: ${({ theme }): string => theme.mainFont};
  }

  pre[class*='language-'] {
    border-radius: ${pxToRem(8)};
  }

  .line-numbers-rows {
    padding: 1em;
  }
`;

export * from './colors';
export * from './mediaQuery';
