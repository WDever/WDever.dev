import { useState, useEffect } from 'react';

export const useLocalStorage = <T>(
  key: string,
  initialValue?: T,
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [state, setState] = useState<T>(() => {
    try {
      const localStorageValue: string | null = localStorage.getItem(key);

      if (localStorageValue !== null) {
        return JSON.parse(localStorageValue);
      }

      if (initialValue) {
        localStorage.setItem(key, JSON.stringify(initialValue));
      }

      return initialValue;
    } catch (e) {
      console.log(e);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (e) {
      console.log(e);
    }
  }, [state]);

  return [state, setState];
};
