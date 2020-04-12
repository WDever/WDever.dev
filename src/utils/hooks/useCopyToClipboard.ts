import { useState } from 'react';

export interface State {
  value?: string;
  isSuccess?: boolean;
}

export function useCopyToClipboard(): [State, (text: string) => Promise<void>] {
  const [state, setState] = useState<State>({
    value: undefined,
    isSuccess: undefined,
  });

  const copy = async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);

      await setState({ value: text, isSuccess: true });
    } catch (e) {
      await setState({ ...state, isSuccess: false });
      console.log(e);
    }
  };

  return [state, copy];
}
