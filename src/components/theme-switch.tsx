import React, { ReactElement } from 'react';
import Switch from 'react-switch';
import { Light, Dark, Default } from 'utils/style';
import styled from 'styled-components';
import { pxToRem } from 'utils';

interface Props {
  isDark: boolean | undefined;
  setIsDark: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

export default function ThemeSwitchComponent({
  isDark,
  setIsDark,
}: Props): ReactElement {
  const checkedIsDark: boolean = typeof isDark === 'undefined' ? false : isDark;

  const handleChange = (isDark: boolean): void => setIsDark(isDark);

  const icon = (isDark: boolean): JSX.Element => (
    <SwitchIcon isDark={isDark}>{isDark ? 'D' : 'L'}</SwitchIcon>
  );

  return (
    <Label htmlFor='theme-switch'>
      <Switch
        id='theme-switch'
        onChange={handleChange}
        checked={checkedIsDark}
        width={48}
        height={24}
        checkedIcon={icon(checkedIsDark)}
        uncheckedIcon={icon(checkedIsDark)}
        offColor={Default.main}
        offHandleColor={Light.bg}
        onColor={Default.main}
        onHandleColor={Dark.bg}
      />
    </Label>
  );
}

export const SwitchIcon = styled.div<{ isDark: boolean }>`
  font-size: ${pxToRem(16)};
  font-family: 'Ubuntu';
  color: ${({ isDark }): string =>
    isDark ? 'rgba(255, 255, 255, 0.87)' : '#ffffff'};
  text-align: center;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  height: ${pxToRem(24)};

  display: flex;
  align-items: center;
`;
