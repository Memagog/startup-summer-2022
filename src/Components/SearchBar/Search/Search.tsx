import React from "react";
import { SearchIcon } from "../../../icons";
import { ISearchProps } from "../SearchBar";
import "./style.scss";

const Search = ({ handleSubmit, state, setState }: ISearchProps) => {
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
          value={state.username}
          onChange={(e) => setState({ ...state, username: e.target.value })}
        />
      </form>
    </div>
  );
};

export default Search;
