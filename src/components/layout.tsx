import React, { ReactNode, ReactElement } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Light, Dark, ThemeChangeTransition } from 'utils/style';
import { useLocalStorage } from 'hooks';
import { fontFiles } from 'lib/fonts/fonts';
import FooterComponent from './footer';
import HeaderComponent from './header';

interface Props {
  location: Location;
  title: string;
  children?: ReactNode;
  selectedTags: string[];
  postTitle?: string;
}

export default function Layout({
  title,
  children,
  selectedTags,
  location,
  postTitle,
}: Props): ReactElement {
  const [isDark, setIsDark] = useLocalStorage<boolean>('theme');

  return (
    <ThemeProvider theme={isDark ? Dark : Light}>
      <Wrapper>
        <GlobalStyle />
        <HeaderComponent
          title={title}
          isDark={isDark}
          setIsDark={setIsDark}
          selectedTags={selectedTags}
          location={location}
          postTitle={postTitle || undefined}
        />
        {children}
        <FooterComponent />
      </Wrapper>
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
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

  @font-face {
    font-family: 'JetBrainsMono';
    src: local('../../lib/fonts/SpoqaHanSansBold'), local('Spoqa-Han-Sans-Bold'),
          url(${fontFiles.JetBrainsMonoRegularWOFF2}) format('woff2'),
          url(${fontFiles.JetBrainsMonoRegularWOFF}) format('woff'),
          url(${fontFiles.JetBrainsMonoRegularTTF}) format('ttf');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'JetBrainsMono';
    src: local('../../lib/fonts/SpoqaHanSansBold'), local('Spoqa-Han-Sans-Bold'),
          url(${fontFiles.JetBrainsMonoBoldWOFF2}) format('woff2'),
          url(${fontFiles.JetBrainsMonoBoldWOFF}) format('woff'),
          url(${fontFiles.JetBrainsMonoBoldTTF}) format('ttf');
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

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;
