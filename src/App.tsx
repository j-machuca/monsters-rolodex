import { useState, useEffect, ChangeEvent } from "react";

import CardList from "./components/cardList/cardList";
import SearchBar from "./components/searchBar/searchBar";

import "./App.css";

// utils
import { getData } from "./utils/data.utils";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const inputOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchField(() => {
      return event.target.value.toLowerCase();
    });
  };

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((users) => setMonsters(users));

    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchUsers();
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
