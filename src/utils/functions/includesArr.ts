export const includesArr = (long: string[], short: string[]): boolean => {
  const boolArr = short.map(item => long.includes(item));
  return !boolArr.includes(false);
};
