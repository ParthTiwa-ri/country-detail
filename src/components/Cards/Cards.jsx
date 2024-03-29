import { useTheme } from "../../Context/ThemeContext";
import { useCountries } from "../../CustomHooks/useCountries";
import Card from "../Card/Card";
// import Loader from "../Loader/Loader";
import Skelton from "../Skeleton/index";

import "./Cards.css";

function Cards() {
  const { data, isLoading } = useCountries(
    "https://restcountries.com/v3.1/all"
  );
  const { darkMode } = useTheme();
  return (
    <div className={`cards ${darkMode ? "dark-mode-car" : "light-mode-car"}`}>
      {isLoading ? (
        <>
          <Skelton /> <Skelton /> <Skelton /> <Skelton /> <Skelton />
          <Skelton /> <Skelton /> <Skelton /> <Skelton /> <Skelton />
          <Skelton /> <Skelton />
        </>
      ) : (
        data.map((item, index) => <Card key={index} item={item} />)
      )}
    </div>
  );
}

export default Cards;
