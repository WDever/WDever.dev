import 'styled-components';

interface Colors {
  bg: string;
  item: string;
  main: string;
  mainFont: string;
  subFont: string;
  headerShadow: string;
}

declare module 'styled-components' {
  export interface DefaultTheme extends Colors {}
}
