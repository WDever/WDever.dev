import React, { ReactElement, useEffect, useState, useRef } from 'react';
import { useWindowScroll } from 'react-use';
import ThemeSwitchComponent from 'components/themeSwitch';
import { Header, Title, ContentWrapper, Links, Inner } from './header.style';

interface Props {
  title: string;
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HeaderComponent({
  title,
  isDark,
  setIsDark,
}: Props): ReactElement {
  const visibility = useRef<boolean>(false);
  const setVisibility = (bool: boolean): void => {
    visibility.current = bool;
  };

  const [memoedY, setMemoedY] = useState<number>(0);
  const { y } = useWindowScroll();

  useEffect(() => {
    const pageBottom = document.body.scrollHeight - window.innerHeight;
    setMemoedY(y);

    if (y < memoedY || y === pageBottom) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }, [y]);

  return (
    <Header scrolled={!!memoedY} visibility={visibility.current}>
      <Inner>
        <Title to='/'>{title}</Title>
        <ContentWrapper>
          <Links to='/about'>About</Links>
          <Links to='/life'>Life</Links>
          <ThemeSwitchComponent isDark={isDark} setIsDark={setIsDark} />
        </ContentWrapper>
      </Inner>
    </Header>
  );
}
