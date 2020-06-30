import React, {
  ReactElement,
  useEffect,
  useState,
  useRef,
  ReactNodeArray,
} from 'react';
import ToastComponent from 'components/toast';
import { useWindowScroll } from 'react-use';
import HeaderTagItemComponent from 'components/items/header-tag-item';
import ThemeSwitchComponent from 'components/theme-switch';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { pxToRem } from 'utils';
import { BaseInner, Default, media } from 'utils/style';
import { useCopyToClipboard } from 'utils/hooks';

interface Props {
  title: string;
  isDark: boolean | undefined;
  setIsDark: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  selectedTags: string[];
  location: Location;
  postTitle?: string;
}

export default function HeaderComponent({
  title,
  isDark,
  setIsDark,
  selectedTags,
  location,
}: Props): ReactElement {
  const [clipboardState, copyToClipboard] = useCopyToClipboard();
  const [toastState, setToastState] = useState<boolean>(false);

  const visibility = useRef<boolean>(false);
  const setVisibility = (bool: boolean): void => {
    visibility.current = bool;
  };

  const [memoedY, setMemoedY] = useState<number>(0);
  const { y } = useWindowScroll();

  const copy = (): void => {
    const { href } = location;

    setToastState(true);
    copyToClipboard(href);
  };

  const tagNotifierClick = (): void => window.scrollTo(0, 0);

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
    <>
      <ToastComponent
        message={
          clipboardState.isSuccess
            ? '현재 페이지의 주소가 복사되었습니다!'
            : '현재 페이지의 주소 복사를 실패했습니다.'
        }
        timeout={3}
        state={toastState}
        setState={setToastState}
      />
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
    </>
  );
}

interface HeaderProps {
  scrolled: boolean;
  visibility: boolean;
}

export const Header = styled.header<HeaderProps>`
  width: 100%;

  transition: top 0.2s ease-in-out, background-color 0.25s, color 0.25s;

  position: sticky;
  top: ${({ visibility }): number | string => {
    return visibility ? 0 : pxToRem(-56);
  }};

  z-index: 5;

  background-color: ${({ theme }): string => theme.item};
  box-shadow: ${({ scrolled, theme, visibility }): false | string =>
    scrolled && visibility && theme.headerShadow};
`;

export const Inner = styled.div`
  ${BaseInner}

  height: ${pxToRem(56)};

  display: flex;
  justify-content: space-between;
`;

const ContentStyle = css`
  font-family: 'Gothic A1';
  color: ${({ theme }): string => theme.mainFont};

  text-decoration: none;
  box-shadow: none;

  margin-right: ${pxToRem(32)};

  ${media.phone} {
    margin-right: ${pxToRem(16)};

    font-size: ${pxToRem(12)};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;

  button {
    ${ContentStyle}

    outline: none;
    border: none;

    background-color: transparent;

    cursor: pointer;
  }
`;

export const InfoWrapper = styled.div`
  max-width: ${`calc(100% - ${pxToRem(48 + 124 + 32)})`};

  display: flex;
  align-items: center;

  h1 {
    font-family: 'Gothic A1';
    font-size: ${pxToRem(20)};

    margin: 0;
    padding: 0;

    margin-left: ${pxToRem(16)};

    color: ${({ theme }): string => theme.mainFont};

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  ${media.phone} {
    h1 {
      display: none;
    }
  }
`;

export const Title = styled(Link)`
  font-family: 'Ubuntu';
  font-weight: bold;
  font-size: ${pxToRem(28)};
  color: ${Default.main};

  margin-right: ${pxToRem(32)};

  text-decoration: none;
  box-shadow: none;
`;

export const Links = styled(Link)`
  ${ContentStyle}
`;
