import { useParams } from "react-router-dom";
import { useCountries } from "../../CustomHooks/useCountries";
import Loader from "../Loader/Loader";
import CountryShowInfo from "../CountryShowInfo/CountryShowInfo";

function CountryDetail() {
  const { id } = useParams();

  const { data, isLoading } = useCountries(
    `https://restcountries.com/v3.1/alpha/${id}`
  );

  return <div>{isLoading ? <Loader /> : <CountryShowInfo data={data} />}</div>;
}

export default CountryDetail;
