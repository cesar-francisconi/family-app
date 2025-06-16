import { useRef } from "react";

export const useDebounce = (bounceRate = 1000) => {
  const busy = useRef(false);

  const debounce = async (callback: Function) => {
    if (!busy.current) {
      busy.current = true;
      callback();
      setTimeout(() => {
        busy.current = false;
      }, bounceRate);
    }
  };

  return { debounce };
};
