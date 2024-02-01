import { useEffect, useState } from "react";
// import { data } from "../../data/data";
import Card from "../Card/Card";

import "./Cards.css";
function Cards() {
  const [data, setData] = useState([]);
  const [isloading, setLoading] = useState(false);

  useEffect(function () {
    async function fetchdata() {
      try {
        setLoading(true);
        const res = await fetch("https://restcountries.com/v3.1/all");
        const dataload = await res.json();
        console.log(dataload);
        setData(dataload);
        setLoading(false);
      } catch (e) {
        throw new Error(e.message);
      }
    }
    fetchdata();
  }, []);

  return (
    <div className="cards">
      {data.map((item, index) => (
        <Card key={index} item={item} isloading={isloading} />
      ))}
    </div>
  );
}

export default Cards;
