import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { pxToRem } from 'utils';
import { BaseInner, Default } from 'utils/style';

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
