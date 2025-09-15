import { useCallback, useRef } from "react";

export const useDebounce = () => {
  const busy = useRef(false);

  const debounce = useCallback((callback: Function, bounceRate = 1000) => {
    if (!busy.current) {
      busy.current = true;
      callback();
      setTimeout(() => {
        busy.current = false;
      }, bounceRate);
    }
  }, []);

  return { debounce };
};
