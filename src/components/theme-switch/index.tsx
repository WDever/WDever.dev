import React, { ReactElement } from 'react';
import Switch from 'react-switch';
import { Light, Dark, Default } from 'utils/style';
import { SwitchIcon, Label } from './style';

interface Props {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ThemeSwitchComponent({
  isDark,
  setIsDark,
}: Props): ReactElement {
  const handleChange = (isDark: boolean): void => {
    setIsDark(isDark);
  };

  const icon = (isDark: boolean): JSX.Element => (
    <SwitchIcon isDark={isDark}>{isDark ? 'D' : 'L'}</SwitchIcon>
  );

  return (
    <Label htmlFor='theme-switch'>
      <Switch
        id='theme-switch'
        onChange={handleChange}
        checked={isDark}
        width={48}
        height={24}
        checkedIcon={icon(isDark)}
        uncheckedIcon={icon(isDark)}
        offColor={Default.main}
        offHandleColor={Light.bg}
        onColor={Default.main}
        onHandleColor={Dark.bg}
      />
    </Label>
  );
}