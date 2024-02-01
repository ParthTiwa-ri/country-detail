import * as Unicons from "@iconscout/react-unicons";
import "./Search.css";

function Search() {
  return (
    <div className="search">
      <form className="input">
        <Unicons.UilSearch style={{ outline: "gray", color: "gray" }} />
        <input placeholder="Search for a Country" />
      </form>
      <div className="filter">
        <p>Filter By Region</p>

        <Unicons.UilAngleDown />
      </div>
    </div>
  );
}

export default Search;
