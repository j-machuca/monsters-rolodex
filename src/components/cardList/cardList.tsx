import Card from "../card/card";
import { Monster } from "../../App";

import "./cardList.css";

type CardListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => {
  return (
    <div className="card-list">
      {monsters.length === 0 ? (
        <h2>No Search Results</h2>
      ) : (
        monsters.map((monster) => {
          return <Card key={monster.id} monster={monster} />;
        })
      )}
    </div>
  );
};

export default CardList;
