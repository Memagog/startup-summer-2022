import React from "react";
import { GitLogo } from "../../resources/icons";
import Search from "./Search";
import "./style.scss";

export interface ISearchProps {
  handleSubmit: (e: any) => {};
  onSearch: (search: string) => void;
  search: string;
}

const SearchBar = ({ handleSubmit, onSearch, search }: ISearchProps) => {
  return (
    <div className="search-bar">
      <div className="logo">
        <GitLogo />
      </div>
      <Search handleSubmit={handleSubmit} onSearch={onSearch} search={search} />
    </div>
  );
};

export default SearchBar;
