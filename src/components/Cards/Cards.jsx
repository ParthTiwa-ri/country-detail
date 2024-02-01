import { data } from "../../data/data";
import Card from "../Card/Card";

import "./Cards.css";
function Cards() {
  return (
    <div className="cards">
      {data.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
}

export default Cards;
