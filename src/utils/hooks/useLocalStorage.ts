import { useState, useEffect, MutableRefObject, useRef } from 'react';

export const useLocalStorage = <T>(
  key: string,
  initialValue?: T,
): [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>] => {
  const [state, setState] = useState<T | undefined>(() => {
    try {
      const localStorageValue: string | null = localStorage.getItem(key);

      if (localStorageValue !== null) {
        return JSON.parse(localStorageValue);
      }
    } catch (e) {
      console.log(e);
    }
  });
  const isInit: MutableRefObject<boolean> = useRef(false);

  useEffect(() => {
    if (!isInit.current) {
      return;
    }

    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (e) {
      console.log(e);
    }
  }, [state]);

  useEffect(() => {
    if (initialValue) {
      localStorage.setItem(key, JSON.stringify(initialValue));
    }
    isInit.current = true;
  }, []);

  return [state, setState];
};
