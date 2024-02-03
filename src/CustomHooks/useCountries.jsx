import { useEffect, useState } from "react";

export function useCountries(url) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(
    function () {
      async function fetchdata() {
        try {
          // await new Promise((resolve) => setTimeout(resolve, 2000));
          const res = await fetch(url);
          const dataload = await res.json();

          setData(dataload);
        } catch (e) {
          throw new Error(e.message);
        } finally {
          setLoading(false);
        }
      }
      fetchdata();
    },
    [url]
  );
  return { data, isLoading };
}
