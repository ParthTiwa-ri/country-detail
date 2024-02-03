import { useParams } from "react-router-dom";
import { useCountries } from "../../CustomHooks/useCountries";
import Loader from "../Loader/Loader";

function CountryDetail() {
  const { id } = useParams();

  const { data, isLoading } = useCountries(
    `https://restcountries.com/v3.1/alpha/${id}`
  );

  console.log(isLoading);
  return (
    <div className="cards">
      {isLoading ? <Loader /> : <h1>{data[0].name.common}</h1>}
    </div>
  );
}

export default CountryDetail;
