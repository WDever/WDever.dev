import 'styled-components';

interface Colors {
  bg: string;
  item: string;
  mainFont: string;
  subFont: string;
  headerShadow: string;
  postItemShadow: string;
}

declare module 'styled-components' {
  export interface DefaultTheme extends Colors {}
}
