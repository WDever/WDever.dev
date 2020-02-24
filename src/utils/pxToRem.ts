const BASE_PX = 16;

export const pxToRem = (px: number): string => `${String(px / BASE_PX)}rem`;
