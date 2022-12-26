import React from "react";
import useDarkMode from "../customHooks/use_Dark_Mode";

const UsingLocalStorage = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div>
      Dark mode:
      <button onClick={() => setDarkMode((prev: any) => !prev)}>
        {darkMode ? "Disable" : "Enable"}
      </button>
    </div>
  );
};

export default UsingLocalStorage;
