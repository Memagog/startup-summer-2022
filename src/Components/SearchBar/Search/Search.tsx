import React from "react";
import { SearchIcon } from "../../../resources/icons";
import { ISearchProps } from "../SearchBar";
import "./style.scss";

const Search = ({ handleSubmit, onSearch, search}: ISearchProps) => {
  return (
    <div className="search-wrapper">
      <div className="search-icon">
        <SearchIcon />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Enter Github username"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
