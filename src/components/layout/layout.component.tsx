import React, { ReactNode, ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { Light, Dark } from 'utils/style';
import TagBarComponent from 'components/tag-bar/tag-bar.component';
import FooterComponent from 'components/footer';
import { useLocalStorage } from 'utils/hooks';
import HeaderComponent from '../header';
import { GlobalStyle, Wrapper } from './layout.style';

interface Props {
  location: Location;
  title: string;
  children?: ReactNode;
  selectedTags: string[];
}

export default function Layout({
  title,
  children,
  selectedTags,
}: Props): ReactElement {
  const [isDark, setIsDark] = useLocalStorage<boolean>('theme');

  return (
    <ThemeProvider theme={isDark ? Dark : Light}>
      <Wrapper>
        <GlobalStyle />
        <HeaderComponent title={title} isDark={isDark} setIsDark={setIsDark} />
        {children}
        <FooterComponent />
      </Wrapper>
    </ThemeProvider>
  );
}
