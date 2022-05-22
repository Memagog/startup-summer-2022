import React from "react";
import { IRepo } from "../../../types";
import "./style.scss";
interface IRepositoryProps {
  repo: IRepo;
}

const Repository = ({ repo }: IRepositoryProps) => {
  return (
    <li className="repos_list_item" key={repo.id}>
      <a className="repos_list_item_link" target="_blank" href={repo.html_url}>
        {repo.name}{" "}
      </a>
      <p className="repos_list_item_description">{repo.description} </p>
    </li>
  );
};

export default Repository;
