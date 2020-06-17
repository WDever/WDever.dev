import React, { useRef, ReactElement } from 'react';
import { Wrapper, Message } from './style';

interface Props {
  message: string;
  timeout: number;
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ToastComponent({
  message,
  timeout,
  state,
  setState,
}: Props): ReactElement {
  const ref = useRef<HTMLDivElement>(null);

  if (state) {
    return (
      <Wrapper
        timeout={timeout}
        ref={ref}
        onAnimationEnd={(): void => setState(false)}
      >
        <Message>{message}</Message>
      </Wrapper>
    );
  }

  return <></>;
}
