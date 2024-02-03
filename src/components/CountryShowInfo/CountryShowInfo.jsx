/* eslint-disable react/prop-types */
import "./CountryShowInfo.css";
import Header from "../Header/Header";
// import Border from "../Border/Border";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import * as Unicons from "@iconscout/react-unicons";
function CountryShowInfo({ data }) {
  if (!data || data.length === 0) {
    return null; // or display a loading message or skeleton
  }

  function getCurrencyName(data) {
    // Check if currencies object exists in the data
    if (data && data.currencies) {
      // Loop through currencies object
      for (const currencyCode in data.currencies) {
        // Access currency name
        const currencyName = data.currencies[currencyCode].name;
        return currencyName;
      }
    }
  }
  console.log(data[0]);
  const currency = getCurrencyName(data[0]);
  const imageUrl = data[0].flags ? data[0].flags.svg : "";
  return (
    <>
      <Header />
      <Link to="/">
        <Button classname="btn-back">
          <Unicons.UilArrowLeft />
          Back
        </Button>
      </Link>
      <div className="container">
        <div className="img">
          <img src={imageUrl} alt="" />
        </div>

        <div className="countryDetails">
          <h1>{data[0].name.official}</h1>
          <div className="subcontainer">
            <div className="oneSide">
              <p>
                <span>Native Name: </span> {data[0].name.common}
              </p>
              <p>
                <span>Population: </span>
                {data[0].population}
              </p>
              <p>
                <span>Region: </span>
                {data[0].region}
              </p>
              <p>
                <span>Sub Region: </span>
                {data[0].subregion}
              </p>
              <p>
                <span>Capital: </span>
                {data[0].capital[0]}{" "}
                {/* Capital is an array, so access its first element */}
              </p>
            </div>
            <div className="anotherside">
              <p>
                <span>Top Level Domain: </span>
                {data[0].tld[0]}{" "}
                {/* TLD is an array, so access its first element */}
              </p>
              <p>
                <span>Currency: </span>
                {currency}
              </p>
              <p>
                <span>Languages: </span>
                {Object.values(data[0].languages).join(", ")}
              </p>
            </div>
          </div>
          {data[0].borders && data[0].borders.length > 0 ? (
            <div className="border">
              <span>Borders Countries: </span>
              {data[0].borders.map((item, index) => (
                <Link to={`/countries/${item}`} key={index}>
                  <Button>{item}</Button>
                </Link>
              ))}
            </div>
          ) : (
            <div className="border">
              <p>
                <span>Borders Countries: </span> {data[0].name.official} has no
                borders
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CountryShowInfo;
