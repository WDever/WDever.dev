import styled from 'styled-components';
import { pxToRem } from 'utils';

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
