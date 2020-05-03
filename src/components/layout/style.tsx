import styled, { createGlobalStyle } from 'styled-components';
import { ThemeChangeTransition } from 'utils/style';
import { fontFiles } from 'lib/fonts/fonts';
import { styledScale } from '../../utils/typography';

export const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Ubuntu';
      src: local('Ubuntu Bold'), local('Ubuntu-Bold'),
          url(${fontFiles.UbuntuBoldWoff2}) format('woff2'),
          url(${fontFiles.UbuntuBoldWoff}) format('woff'),
          url(${fontFiles.UbuntuBoldTTF}) format('truetype');
      font-weight: bold;
      font-style: normal;
  }

  @font-face {
      font-family: 'Gothic A1';
      src: local('Gothic A1 Bold'), local('GothicA1-Bold'),
          url(${fontFiles.GothicA1BoldWoff2}) format('woff2'),
          url(${fontFiles.GothicA1BoldWoff}) format('woff'),
          url(${fontFiles.GothicA1BoldTTF}) format('truetype');
      font-weight: bold;
      font-style: normal;
  }

  @font-face {
      font-family: 'Ubuntu';
      src: local('Ubuntu Regular'), local('Ubuntu-Regular'),
          url(${fontFiles.UbuntuRegularWoff2}) format('woff2'),
          url(${fontFiles.UbuntuRegularWoff}) format('woff'),
          url(${fontFiles.UbuntuRegularTTF}) format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Gothic A1';
      src: local('../../lib/fonts/Gothic A1 Regular'), local('GothicA1-Regular'),
          url(${fontFiles.GothicA1RegularWoff2}) format('woff2'),
          url(${fontFiles.GothicA1RegularWoff}) format('woff'),
          url(${fontFiles.GothicA1RegularTTF}) format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'SpoqaHanSans';
      src: local('../../lib/fonts/SpoqaHanSans Regular'), local('Spoqa-Han-Sans-Regular'),
          url(${fontFiles.SpoqaHanSansRegularWoff2}) format('woff2'),
          url(${fontFiles.SpoqaHanSansRegularWoff}) format('woff'),
          url(${fontFiles.SpoqaHanSansRegularTTF}) format('ttf');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'SpoqaHanSans';
      src: local('../../lib/fonts/SpoqaHanSansBold'), local('Spoqa-Han-Sans-Bold'),
          url(${fontFiles.SpoqaHanSansBoldWoff2}) format('woff2'),
          url(${fontFiles.SpoqaHanSansBoldWoff}) format('woff'),
          url(${fontFiles.SpoqaHanSansBoldTTF}) format('ttf');
      font-weight: bold;
      font-style: normal;
  }

  body {
    background-color: ${({ theme }): string => theme.bg};
    ${ThemeChangeTransition}
  }

  a,
  abbr,
  acronym,
  address,
  applet,
  article,
  aside,
  audio,
  b,
  big,
  blockquote,
  body,
  canvas,
  caption,
  cite,
  code,
  dd,
  del,
  details,
  dfn,
  div,
  dl,
  dt,
  em,
  embed,
  fieldset,
  figcaption,
  figure,
  footer,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header,
  hgroup,
  html,
  i,
  iframe,
  img,
  ins,
  kbd,
  label,
  legend,
  li,
  mark,
  menu,
  nav,
  object,
  ol,
  output,
  p,
  pre,
  q,
  s,
  samp,
  section,
  small,
  span,
  strike,
  strong,
  sub,
  summary,
  sup,
  table,
  tbody,
  td,
  tfoot,
  th,
  thead,
  time,
  tr,
  tt,
  u,
  ul,
  var,
  video {
    word-break: keep-all;
  }

  h1, h2 {
    border: none;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 160px - 88px - 56px - 3.5rem - 80px);

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;

export const H1 = styled.h1`
  ${styledScale(1.5)};
  margin-bottom: rhythm(1.5);
  margin-top: 0;
`;
