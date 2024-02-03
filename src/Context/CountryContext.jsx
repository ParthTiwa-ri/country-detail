/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const CountryContext = createContext();

export function CountryProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  return (
    <CountryContext.Provider value={{ data, isLoading, setData, setLoading }}>
      {children}
    </CountryContext.Provider>
  );
}

export function useCountriesContext() {
  const context = useContext(CountryContext);

  // Throw an error if the hook is used outside of the CountryProvider
  if (context === undefined)
    throw new Error("useCountries must be used within a CountryProvider");

  return context;
}
