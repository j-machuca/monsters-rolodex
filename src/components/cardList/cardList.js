import Card from "../card/card";

import "./cardList.css";

const CardList = ({ monsters }) => {
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
