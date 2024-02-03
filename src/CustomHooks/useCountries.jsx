import { useEffect } from "react";
import { useCountriesContext } from "../Context/CountryContext";

export function useCountries(url) {
  // const [data, setData] = useState([]);
  const { isLoading, setLoading } = useCountriesContext();
  const { data, setData } = useCountriesContext();

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchdata() {
        try {
          if (!url) {
            const res = await fetch("https://restcountries.com/v3.1/all", {
              signal: controller.signal,
            });
            if (!res.ok) throw new Error("Country Not Found");
            const dataload = await res.json();

            setData(dataload);
            return;
          }
          // await new Promise((resolve) => setTimeout(resolve, 2000));
          const res = await fetch(url, { signal: controller.signal });
          if (!res.ok) throw new Error("Country Not Found");
          const dataload = await res.json();

          setData(dataload);
        } catch (e) {
          console.log(e.message);
        } finally {
          setLoading(false);
        }
      }
      fetchdata();
      return function () {
        controller.abort();
      };
    },
    [url, setData, setLoading]
  );
  return { data, isLoading };
}
