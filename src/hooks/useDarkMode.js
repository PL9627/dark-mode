import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = (initValue) => {
  const [darkMode, setDarkMode] = useLocalStorage('dark-mode', initValue);

  useEffect(() => {
    darkMode === true
      ? document.querySelector("body").classList.add('dark-mode')
      : document.querySelector("body").classList.remove('dark-mode');
  });

  return [darkMode, setDarkMode];
};
