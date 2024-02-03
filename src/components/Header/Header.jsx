import { useTheme } from "../../Context/ThemeContext";
import * as Unicons from "@iconscout/react-unicons";
import "./Header.css";

function Header() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div
      className={`header ${darkMode ? "dark-mode-head" : "light-mode-head"}`}
    >
      <h2>Where in the world?</h2>
      <div onClick={toggleDarkMode} className="darkbtn">
        {darkMode ? (
          <>
            <Unicons.UilSun style={{ height: "1.6rem", width: "1.6rem" }} />
            <span>Light Mode</span>
          </>
        ) : (
          <>
            <Unicons.UilMoon style={{ height: "1.6rem", width: "1.6rem" }} />
            <span>Dark Mode</span>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
<Unicons.UilSun style={{ height: "1.6rem", width: "1.6rem" }} />;
