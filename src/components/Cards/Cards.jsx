import { useCountries } from "../../CustomHooks/useCountries";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";

import "./Cards.css";

function Cards() {
  const { data, isLoading } = useCountries("https://restcountries.com/v2/all");
  

  return (
    <div className="cards">
      {isLoading ? (
        <Loader />
      ) : (
        data.map((item, index) => <Card key={index} item={item} />)
      )}
    </div>
  );
}

export default Cards;
