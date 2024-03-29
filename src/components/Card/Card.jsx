/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Card.css";
import { useTheme } from "../../Context/ThemeContext";
function Card({ item }) {
  const { darkMode } = useTheme();
  return (
    <Link
      to={`countries/${item.ccn3}`}
      className={`card ${darkMode ? "dark-mode-card" : "light-mode-card"}`}
    >
      <div>
        <img src={item.flags.png} alt="flag" />

        <div className="details">
          <h3>{item.name.common}</h3>
          <div className="detail">
            <p>
              <span>Population: </span>
              {item.population}
            </p>
            <p>
              <span>Region: </span>
              {item.region}
            </p>
            <p>
              <span>Capital: </span>
              {item.capital}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
