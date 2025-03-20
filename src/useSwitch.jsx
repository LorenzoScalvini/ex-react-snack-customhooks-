import { useState } from 'react';

export default function useSwitch(initialState = false) {
  const [state, setState] = useState(initialState);

  const toggle = () => {
    setState((prevState) => !prevState);
  };

  return [state, toggle];
}
