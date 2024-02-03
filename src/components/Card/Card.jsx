/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Card.css";
function Card({ item }) {
  return (
    <Link to={`countries/${item.ccn3}`} className="card">
      <div>
        <img src={item.flags.png} alt="flag" />

        <div className="details">
          <h3>{item.name}</h3>
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
