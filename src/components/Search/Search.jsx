/* eslint-disable react/prop-types */
import { useState } from "react";
import * as Unicons from "@iconscout/react-unicons";
import "./Search.css";
import { useCountries } from "../../CustomHooks/useCountries";
import { useTheme } from "../../Context/ThemeContext";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [visible, setVisible] = useState(false);
  const { darkMode } = useTheme();

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  function handleFilterClick() {
    setVisible((prevState) => !prevState);
  }

  // Fetch countries based on search value or selected region
  useCountries(
    searchValue.length > 0
      ? `https://restcountries.com/v3.1/name/${searchValue}`
      : selectedRegion
      ? `https://restcountries.com/v3.1/region/${selectedRegion}`
      : null
  );

  return (
    <div className={`search ${darkMode ? "dark-mode" : "light-mode"}`}>
      <form className="input" onSubmit={(e) => e.preventDefault()}>
        <Unicons.UilSearch style={{ outline: "gray", color: "gray" }} />
        <input
          placeholder="Search for a Country"
          value={searchValue}
          onChange={handleInputChange}
        />
      </form>
      <div onClick={handleFilterClick} className="filter">
        {selectedRegion ? selectedRegion : <p>Filter By Region</p>}
        <Unicons.UilAngleDown />
        {visible && (
          <div className="filterMenu">
            <RegionOption region="All" setSelectedRegion={setSelectedRegion} />
            <RegionOption
              region="Africa"
              setSelectedRegion={setSelectedRegion}
            />
            <RegionOption
              region="Americas"
              setSelectedRegion={setSelectedRegion}
            />
            <RegionOption region="Asia" setSelectedRegion={setSelectedRegion} />
            <RegionOption
              region="Europe"
              setSelectedRegion={setSelectedRegion}
            />
            <RegionOption
              region="Oceania"
              setSelectedRegion={setSelectedRegion}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function RegionOption({ region, setSelectedRegion }) {
  const handleRegionSelect = () => {
    if (region !== "All") setSelectedRegion(region);
    else {
      setSelectedRegion("");
    }
  };

  return <p onClick={handleRegionSelect}>{region}</p>;
}

export default Search;
