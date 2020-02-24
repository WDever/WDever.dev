import React, { ReactElement, useState } from 'react';
import Switch from 'react-switch';
import { Light, Dark } from 'lib/style';
import { SwitchIcon, Label } from './themeSwitch.style';

interface ThemeSwitchProps {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ThemeSwitchComponent({
  checked,
  setChecked,
}: ThemeSwitchProps): ReactElement {
  const handleChange = (checked: boolean): void => {
    setChecked(checked);
  };

  const icon = (checked: boolean): JSX.Element => (
    <SwitchIcon checked={checked}>{checked ? 'D' : 'L'}</SwitchIcon>
  );

  return (
    <Label htmlFor='theme-switch'>
      <Switch
        id='theme-switch'
        onChange={handleChange}
        checked={checked}
        width={48}
        height={24}
        checkedIcon={icon(checked)}
        uncheckedIcon={icon(checked)}
        offColor={Light.main}
        offHandleColor={Light.bg}
        onColor={Dark.main}
        onHandleColor={Dark.bg}
      />
    </Label>
  );
}
