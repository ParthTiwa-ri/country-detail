import { useEffect } from "react";
import { useCountriesContext } from "../Context/CountryContext";

export function useCountries(url) {
  const { isLoading, setLoading, setData } = useCountriesContext();

  useEffect(() => {
    async function fetchData() {
      setLoading(true); // Set loading state to true before fetching data
      try {
        let responseData;
        if (!url) {
          // Fetch all countries if URL is not provided
          const res = await fetch("https://restcountries.com/v3.1/all");
          if (!res.ok) throw new Error("Failed to fetch countries");
          responseData = await res.json();
        } else {
          const res = await fetch(url);
          if (!res.ok) throw new Error("Country Not Found");
          responseData = await res.json();
        }
        setData(responseData); // Set fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading state to false after fetch operation
      }
    }

    fetchData();

    // Cleanup function
    // No cleanup needed here since we're not using any controller
  }, [url, setData, setLoading]);

  return { data: useCountriesContext().data, isLoading }; // Return data and loading state
}
