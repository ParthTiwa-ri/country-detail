/* eslint-disable react/prop-types */

import { useTheme } from "../../Context/ThemeContext";
import "./Button.css";
function Border({ children, classname = "", btnflex = "" }) {
  const { darkMode } = useTheme();
  return (
    <div className={classname}>
      <button
        className={`country__details--button ${btnflex} ${
          darkMode ? "dark-mode-btn" : "light-mode-btn"
        }`}
      >
        {children}
      </button>
    </div>
  );
}

export default Border;
