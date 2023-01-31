import { useState, useEffect } from "react";

import CardList from "./components/cardList/cardList";
import SearchBar from "./components/searchBar/searchBar";

import "./App.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const inputOnChangeHandler = (event) => {
    setSearchField(() => {
      return event.target.value.toLowerCase();
    });
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBar
        className="monsters-search-box"
        inputOnChangeHandler={(event) => {
          inputOnChangeHandler(event);
        }}
        searchField={searchField}
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
