import React, { useState } from "react";

export default function useLocalStorage(
  key = "",
  initialValue: unknown | null = null
) {
  const [state, setState] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      //   console.log(item);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setLocalStorageState = (newState: any) => {
    try {
      const newStateValue =
        typeof newState === "function" ? newState(state) : newState;
      setState(newStateValue);
      window.localStorage.setItem(key, JSON.stringify(newStateValue));
    } catch (error) {
      console.error(`Unable to store new value for ${key} in local Storage.`);
    }
  };

  return [state, setLocalStorageState];
}
