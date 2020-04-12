import { DefaultTheme } from 'styled-components';

export const Light: DefaultTheme = {
  bg: '#ffffff',
  item: '#ffffff',
  mainFont: '#000000',
  subFont: '#000000',
  headerShadow: '0 4px 32px 0 rgba(0, 0, 0, 0.08);',
  itemShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.1)',
  bio: '#f0f0f0',
};

export const Dark: DefaultTheme = {
  bg: '#232326',
  item: '#2a2a2d',
  mainFont: 'rgba(255, 255, 255, 0.87)',
  subFont: 'rgba(255, 255, 255, 0.6)',
  headerShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.32);',
  itemShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.36);',
  bio: '#363639',
};

export interface DefaultColor {
  main: string;
  accent: string;
  gradient: string;
  reverseGradient: string;
  tagItem: string;
  tagFont: string;
  date: string;
  postItemHoverShadow: string;
}

export const Default: DefaultColor = {
  main: '#4470ff',
  accent: '#ffcd45',
  gradient: 'linear-gradient(to right, #4470ff, #8a53ff);',
  reverseGradient: 'linear-gradient(to right, #8a53ff, #4470ff);',
  tagItem: 'rgba(255, 255, 255, 0.5)',
  tagFont: '#000000',
  date: '#8e8e8e',
  postItemHoverShadow: '0 4px 32px 0 rgba(68, 112, 255, 0.32);',
};
