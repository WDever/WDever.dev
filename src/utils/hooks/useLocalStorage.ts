import { useState, useEffect, MutableRefObject, useRef } from 'react';

export const useLocalStorage = <T>(
  key: string,
  initialValue?: T,
): [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>] => {
  const [state, setState] = useState<T | undefined>(undefined);
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
    try {
      const localStorageValue: string | null = localStorage.getItem(key);

      if (localStorageValue !== null) {
        setState(JSON.parse(localStorageValue));
        isInit.current = true;
        return;
      }

      if (initialValue) {
        localStorage.setItem(key, JSON.stringify(initialValue));
      }

      isInit.current = true;
    } catch (e) {
      console.log(e);
    }
  }, []);

  return [state, setState];
};
