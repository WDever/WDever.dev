const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  tabletL: customMediaQuery(1024),
  tabletM: customMediaQuery(768),
  phone: customMediaQuery(425),
};
