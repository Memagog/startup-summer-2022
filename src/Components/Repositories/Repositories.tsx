import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Empty } from "../../resources/icons";
import { IRepo, IUser } from "../../types";
import Repository from "./Repository";
import "./style.scss";
interface IRepositoriesProps {
  user: IUser;
}

const Repositories = ({ user }: IRepositoriesProps) => {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [perPage, setPerPage] = useState(4);
  const pageVisited = currentPage * perPage;

  const getRepositories = async () => {
    try {
      const result = await (
        await fetch(
          `https://api.github.com/users/${
            user.login
          }/repos?per_page=${perPage}&page=${currentPage + 1}`
        )
      ).json();
      setRepos(result);
    } catch (error) {}
  };
  useEffect(() => {
    if (user.public_repos > 0) {
      getRepositories();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, perPage, currentPage]);

  const pageCount = Math.ceil(user.public_repos / perPage);

  const changePage = ({ selected }: any) => {
    setCurrentPage(selected);
  };
  return (
    <div className="repos">
      {user.public_repos > 0 ? (
        <div className="repos_container">
          <div>
            <h1 className="repos_counter_title">
              {" "}
              Repositories ({user.public_repos})
            </h1>
            <ul className="repos_list">
              {repos.map((repo: IRepo) => (
                <Repository repo={repo} key={repo.id} />
              ))}
            </ul>
          </div>

          {user.public_repos > perPage ? (
            <div className="paginationBttns">
              <p className="paginationRow">
                {pageVisited + 1 + " - "}
                {pageVisited + perPage - 1}
                {" of " + user.public_repos}
              </p>
              <ReactPaginate
                previousLabel={""}
                nextLabel={""}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
              />
            </div>
          ) : undefined}
        </div>
      ) : (
        <div className="empty">
          <Empty />
          <p>Repository list is empty</p>
        </div>
      )}
    </div>
  );
};

export default Repositories;
