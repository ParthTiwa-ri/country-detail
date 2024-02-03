import { useEffect, useState } from "react";

export function useCountries(query) {
  const [data, setData] = useState([]);
  const [isloading, setLoading] = useState(false);

  useEffect(
    function () {
      async function fetchdata() {
        setLoading(true);
        try {
          const res = await fetch(query);
          const dataload = await res.json();
          console.log(dataload);
          setData(dataload);
        } catch (e) {
          throw new Error(e.message);
        } finally {
          setLoading(false);
        }
      }
      fetchdata();
    },
    [query]
  );
  return { data, isloading };
}
