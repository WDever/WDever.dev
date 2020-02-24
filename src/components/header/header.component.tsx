import React, { ReactElement } from 'react';
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
  return (
    <Header scrolled>
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
