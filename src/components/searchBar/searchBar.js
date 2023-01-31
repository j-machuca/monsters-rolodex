import "./searchBar.css";

const SearchBar = (props) => {
  const { className, inputOnChangeHandler, searchField } = props;
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder="Search monsters"
      onChange={(event) => {
        inputOnChangeHandler(event);
      }}
      value={searchField}
    />
  );
};

export default SearchBar;
