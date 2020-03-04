import React, { ReactNode, ReactElement, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Light, Dark } from 'utils/style';
import TagBarComponent from 'components/tagBar/tagBar.component';
import FooterComponent from 'components/footer';
import { useLocalStorage } from 'utils/hooks';
import HeaderComponent from '../header';
import { GlobalStyle, Wrapper } from './layout.style';

interface Props {
  location: Location;
  title: string;
  children?: ReactNode;
}

export default function Layout({
  location,
  title,
  children,
}: Props): ReactElement {
  const [isDark] = useLocalStorage<boolean>('theme');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const rootPath: string = `/`;

  const tagBar: ReactNode = location.pathname === rootPath && (
    <TagBarComponent
      selectedTags={selectedTags}
      setSelectedTags={setSelectedTags}
    />
  );

  return (
    <ThemeProvider theme={isDark ? Dark : Light}>
      <Wrapper>
        <GlobalStyle />
        <HeaderComponent title={title} />
        {tagBar}
        {children}
        <FooterComponent />
      </Wrapper>
    </ThemeProvider>
  );
}
