/* eslint-disable react/prop-types */
// ThemeContext.js
import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [themeClass, setThemeClass] = useState("");

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(prefersDarkMode);
    setThemeClass(prefersDarkMode ? "dark-mode" : "light-mode");
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    setThemeClass((prevClass) =>
      prevClass === "dark-mode" ? "light-mode" : "dark-mode"
    );
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={themeClass}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
