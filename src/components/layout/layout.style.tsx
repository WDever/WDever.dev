import styled, { createGlobalStyle } from 'styled-components';
import { ThemeChangeTransition } from 'utils/style';
import { styledScale } from '../../utils/typography';

export const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Ubuntu';
      src: local('Ubuntu Bold'), local('Ubuntu-Bold'),
          url('../../lib/fonts/Ubuntu-Bold.woff2') format('woff2'),
          url('../../lib/fonts/Ubuntu-Bold.woff') format('woff'),
          url('../../lib/fonts/Ubuntu-Bold.ttf') format('truetype');
      font-weight: bold;
      font-style: normal;
  }

  @font-face {
      font-family: 'Gothic A1';
      src: local('Gothic A1 Bold'), local('GothicA1-Bold'),
          url('../../lib/fonts/GothicA1-Bold.woff2') format('woff2'),
          url('../../lib/fonts/GothicA1-Bold.woff') format('woff'),
          url('../../lib/fonts/GothicA1-Bold.ttf') format('truetype');
      font-weight: bold;
      font-style: normal;
  }

  @font-face {
      font-family: 'Ubuntu';
      src: local('Ubuntu Regular'), local('Ubuntu-Regular'),
          url('../../lib/fonts/Ubuntu-Regular.woff2') format('woff2'),
          url('../../lib/fonts/Ubuntu-Regular.woff') format('woff'),
          url('../../lib/fonts/Ubuntu-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Gothic A1';
      src: local('../../lib/fonts/Gothic A1 Regular'), local('GothicA1-Regular'),
          url('../../lib/fonts/GothicA1-Regular.woff2') format('woff2'),
          url('../../lib/fonts/GothicA1-Regular.woff') format('woff'),
          url('../../lib/fonts/GothicA1-Regular.ttf') format('ttf');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'SpoqaHanSans';
      src: local('../../lib/fonts/SpoqaHanSans Regular'), local('Spoqa-Han-Sans-Regular'),
          url('../../lib/fonts/SpoqaHanSansRegular.woff2') format('woff2'),
          url('../../lib/fonts/SpoqaHanSansRegular.woff') format('woff'),
          url('../../lib/fonts/SpoqaHanSansRegular.ttf') format('ttf');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'SpoqaHanSans';
      src: local('../../lib/fonts/SpoqaHanSansBold'), local('Spoqa-Han-Sans-Bold'),
          url('../../lib/fonts/SpoqaHanSansBold.woff2') format('woff2'),
          url('../../lib/fonts/SpoqaHanSansBold.woff') format('woff'),
          url('../../lib/fonts/SpoqaHanSansBold.ttf') format('ttf');
      font-weight: bold;
      font-style: normal;
  }

  body {
    background-color: ${({ theme }): string => theme.bg};
    ${ThemeChangeTransition}
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
