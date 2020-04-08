import React, { ReactNode, ReactElement, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Light, Dark } from 'utils/style';
import FooterComponent from 'components/footer';
import { useLocalStorage, useCopyToClipboard } from 'utils/hooks';
import ToastComponent from 'components/toast';
import HeaderComponent from '../header';
import { GlobalStyle, Wrapper } from './style';

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
  const [clipboardState, copyToClipboard] = useCopyToClipboard();
  const [toastState, setToastState] = useState<boolean>(false);

  const copyToClipboardWithSetState = (href: string): void => {
    if (!clipboardState.isSuccess) {
      copyToClipboard(href);
      setToastState(false);
      return;
    }

    copyToClipboard(href);
    setToastState(true);
  };

  useEffect(() => {
    if (clipboardState.isSuccess) {
      setToastState(true);
    }
  }, [clipboardState.isSuccess]);

  return (
    <ThemeProvider theme={isDark ? Dark : Light}>
      <Wrapper>
        <ToastComponent
          message='현재 페이지의 주소가 복사되었습니다!'
          timeout={3}
          state={toastState}
          setState={setToastState}
        />
        <GlobalStyle />
        <HeaderComponent
          title={title}
          isDark={isDark}
          setIsDark={setIsDark}
          selectedTags={selectedTags}
          copyToClipboard={copyToClipboardWithSetState}
          location={location}
          postTitle={postTitle}
        />
        {children}
        <FooterComponent />
      </Wrapper>
    </ThemeProvider>
  );
}
