import styled, { createGlobalStyle } from 'styled-components';
import { rhythm, styledScale } from '../../utils/typography';

export const GlobalStyle = createGlobalStyle`
  /* @font-face {
    font-family: 'Ubuntu';
    font-weight: normal;
    src: local('Ubuntu'), url('../../lib/fonts/Ubuntu-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Ubuntu';
    font-weight: bold;
    src: local('Ubuntu'), url('../../lib/fonts/Ubuntu-Bold.ttf') format('truetype');
  }
 */
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
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const H1 = styled.h1`
  ${styledScale(1.5)};
  margin-bottom: rhythm(1.5);
  margin-top: 0;
`;
