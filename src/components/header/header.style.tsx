import styled from 'styled-components';
import { Link } from 'gatsby';
import { pxToRem } from 'utils';

interface HeaderProps {
  scrolled: boolean;
  visibility: boolean;
}

export const Header = styled.header<HeaderProps>`
  width: 100%;
  height: ${pxToRem(56)};

  display: flex;
  justify-content: center;

  transition: all 0.2s ease-in-out;

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
  max-width: ${pxToRem(1392)};
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin: 0 ${pxToRem(24)};
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled(Link)`
  font-family: 'Ubuntu';
  font-weight: bold;
  font-size: ${pxToRem(28)};
  color: ${({ theme }): string => theme.main};

  text-decoration: none;
  box-shadow: none;
`;

export const Links = styled(Link)`
  font-family: 'Gothic A1';
  color: ${({ theme }): string => theme.mainFont};

  text-decoration: none;
  box-shadow: none;

  margin-right: 2rem;
`;
