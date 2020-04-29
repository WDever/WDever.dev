import React, {
  ReactElement,
  ReactNode,
  useEffect,
  useState,
  useRef,
  ReactNodeArray,
} from 'react';
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
} from './style';

interface Props {
  title: string;
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTags: string[];
  copyToClipboard: (text: string) => void;
  location: Location;
  postTitle?: string;
}

export default function HeaderComponent({
  title,
  isDark,
  setIsDark,
  selectedTags,
  copyToClipboard,
  location,
}: Props): ReactElement {
  const visibility = useRef<boolean>(false);
  const setVisibility = (bool: boolean): void => {
    visibility.current = bool;
  };

  const [memoedY, setMemoedY] = useState<number>(0);
  const { y } = useWindowScroll();

  const copy = (): void => {
    const { href } = location;

    copyToClipboard(href);
  };

  const tagNotifierClick = (): void => {
    window.scrollTo(0, 0);
  };

  const isScrolled = !!memoedY;

  const tagNotifier = (): ReactNodeArray | undefined => {
    if (!isScrolled) {
      return;
    }

    if (selectedTags.length === 0) {
      return;
    }

    if (location.pathname.length > 1) {
      return;
    }

    const tags: ReactNodeArray = selectedTags.map((item, i) => (
      <HeaderTagItemComponent
        key={i}
        tag={item}
        tagNotifierClick={tagNotifierClick}
      />
    ));

    return tags;
  };

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
          {tagNotifier()}
        </InfoWrapper>
        <ContentWrapper>
          <button type='button' onClick={copy}>
            Share
          </button>
          <Links to='/about'>About</Links>
          <ThemeSwitchComponent isDark={isDark} setIsDark={setIsDark} />
        </ContentWrapper>
      </Inner>
    </Header>
  );
}
