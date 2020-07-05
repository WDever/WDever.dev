import { DefaultTheme } from 'styled-components';

export const Light: DefaultTheme = {
  bg: '#fff',
  item: '#fff',
  mainFont: '#000',
  subFont: '#777',
  headerShadow: '0 4px 32px 0 rgba(0, 0, 0, 0.08);',
  itemShadow: '0px 4px 32px rgba(0, 0, 0, 0.08)',
  itemBtnBorder: '#eee',
  bio: '#f0f0f0',
  footer: '#f0f0f0',
  headerBorder: 'hsla(0,0%,0%,0.07);',
};

export const Dark: DefaultTheme = {
  bg: '#232326',
  item: '#2a2a2d',
  mainFont: 'rgba(255, 255, 255, 0.87)',
  subFont: 'rgba(255, 255, 255, 0.6)',
  headerShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.32);',
  itemShadow: 'none',
  itemBtnBorder: '#555',
  bio: '#363639',
  footer: '#2a2a2d',
  headerBorder: 'rgba(255, 255, 255, 0.2)',
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
