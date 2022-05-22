import React, { Dispatch, SetStateAction } from "react";
import { IState } from "../../App";
import { GitLogo } from "../../resources/icons";
import Search from "./Search";
import "./style.scss";

export interface ISearchProps {
  handleSubmit: (e: any) => {};
  setState: Dispatch<SetStateAction<IState>>;
  state: IState;
}

const SearchBar = ({ handleSubmit, setState, state }: ISearchProps) => {
  return (
    <div className="search-bar">
      <div className="logo">
        <GitLogo />
      </div>
      <Search handleSubmit={handleSubmit} setState={setState} state={state} />
    </div>
  );
};

export default SearchBar;
