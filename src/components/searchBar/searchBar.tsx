//import React, { ChangeEventHandler, ChangeEvent } from "react";
import React, { ChangeEventHandler } from "react";
import "./searchBar.css";

// interface ISearchBoxProps {
//   className: string;
//   searchField?: string;
// }

// // Typescript Overload, can be done by extending as well
// interface ISearchBoxProps {
//   inputOnChangeHandler: (event: React.ChangeEvent) => void;
// }

// Can use types instead
type SearchBoxProps = {
  className: string;
  searchField?: string;
  inputOnChangeHandler: ChangeEventHandler<HTMLInputElement>;
  /*
  could import the ChangeEvent which is the event definition
  inputOnChangeHandler:(event:ChangeEvent<HTMLInputElement>)=> void; or whatever this function returns if need be.
  */
};

const SearchBar = ({
  className,
  searchField,
  inputOnChangeHandler,
}: SearchBoxProps) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder="Search monsters"
      onChange={inputOnChangeHandler}
      value={searchField}
    />
  );
};

export default SearchBar;
