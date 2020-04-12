import 'styled-components';

interface Colors {
  bg: string;
  item: string;
  mainFont: string;
  subFont: string;
  headerShadow: string;
  itemShadow: string;
  bio: string;
}

declare module 'styled-components' {
  export interface DefaultTheme extends Colors {}
}
