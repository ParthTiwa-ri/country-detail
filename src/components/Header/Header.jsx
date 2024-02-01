import "./Header.css";
import * as Unicons from "@iconscout/react-unicons";
function Header() {
  return (
    <div className="header">
      <h2>Where in the world?</h2>
      <div className="darkbtn">
        <Unicons.UilMoon style={{ height: "1.6rem", width: "1.rem" }} />
        <span>Dark Mode</span>
      </div>
    </div>
  );
}

export default Header;
