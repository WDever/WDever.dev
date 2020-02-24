import React, { ReactElement, useEffect, useState, useRef } from 'react';
import { useWindowScroll } from 'react-use';
import ThemeSwitchComponent from 'components/themeSwitch';
import { Header, Inner, Title, ContentWrapper, Links } from './header.style';

interface HeaderProps {
  title: string;
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HeaderComponent({
  title,
  checked,
  setChecked,
}: HeaderProps): ReactElement {
  const visibility = useRef<boolean>(false);
  const setVisibility = (bool: boolean): void => {
    visibility.current = bool;
  };

  const [memoedY, setMemoedY] = useState<number>(0);
  const { y } = useWindowScroll();

  useEffect(() => {
    setMemoedY(y);

    if (y < memoedY || y === window.innerHeight) {
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
          <ThemeSwitchComponent checked={checked} setChecked={setChecked} />
        </ContentWrapper>
      </Inner>
    </Header>
  );
}
