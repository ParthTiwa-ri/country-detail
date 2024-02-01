/* eslint-disable react/prop-types */
import "./Card.css";
function Card({ item }) {
  return (
    <div className="card">
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
  );
}

export default Card;
