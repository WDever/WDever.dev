import React, { ReactElement, useEffect, useState, useRef } from 'react';
import { useWindowScroll } from 'react-use';
import HeaderTagItemComponent from 'components/items/header-tag-item';
import ThemeSwitchComponent from 'components/theme-switch';
import {
  Header,
  Title,
  ContentWrapper,
  Links,
  Inner,
  InfoWrapper,
} from './header.style';

interface Props {
  title: string;
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTags: string[];
}

export default function HeaderComponent({
  title,
  isDark,
  setIsDark,
  selectedTags,
}: Props): ReactElement {
  const visibility = useRef<boolean>(false);
  const setVisibility = (bool: boolean): void => {
    visibility.current = bool;
  };

  const [memoedY, setMemoedY] = useState<number>(0);
  const { y } = useWindowScroll();

  const tagNotifierClick = (): void => {
    window.scrollTo(0, 0);
  };

  const isScrolled = !!memoedY;

  const tagNotifier =
    isScrolled && selectedTags.length === 0 ? (
      <HeaderTagItemComponent tag='#All' tagNotifierClick={tagNotifierClick} />
    ) : (
      selectedTags.map((item, i) => (
        <HeaderTagItemComponent
          key={i}
          tag={item}
          tagNotifierClick={tagNotifierClick}
        />
      ))
    );

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
    <Header scrolled={isScrolled} visibility={visibility.current}>
      <Inner>
        <InfoWrapper>
          <Title to='/'>{title}</Title>
          {tagNotifier}
        </InfoWrapper>
        <ContentWrapper>
          <Links to='/about'>About</Links>
          {/* <Links to='/life'>Life</Links> */}
          <ThemeSwitchComponent isDark={isDark} setIsDark={setIsDark} />
        </ContentWrapper>
      </Inner>
    </Header>
  );
}
