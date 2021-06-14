import  { useEffect, useState } from "react";

const useLocalStorage = (key, initvalue = "") => {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) || initvalue;
  });
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
