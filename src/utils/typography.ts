import { CSSObject } from 'styled-components';
import Typography from 'typography';
import GitHubTheme from 'typography-theme-github';
import { pxToRem } from './functions';

GitHubTheme.overrideThemeStyles = (): object => {
  return {
    a: {
      boxShadow: `none`,
      textDecoration: `none`,
      color: `#0687f0`,
    },
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
      textDecoration: `none`,
    },

    'a:hover': {
      textDecoration: `none`,
    },

    h1: {
      fontWeight: 800,
      lineHeight: 1.3,
      fontFamily: 'Gothic A1',
    },

    h2: {
      fontWeight: 700,
      lineHeight: 1.3,
      marginTop: pxToRem(56),
      marginBottom: pxToRem(20),
      fontSize: pxToRem(24),
      fontFamily: 'Gothic A1',
    },

    h3: {
      lineHeight: 1.3,
      fontSize: pxToRem(20),
      fontFamily: 'Gothic A1',
    },

    ul: {
      marginBottom: '6px',
    },

    li: {
      marginBottom: '2px',
    },

    p: {
      fontFamily: 'SpoqaHanSans',
    },
  };
};

const typography = new Typography(GitHubTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const { rhythm, scale } = typography;

type StyledScale = (values: number) => CSSObject;
export const styledScale = scale as StyledScale;
