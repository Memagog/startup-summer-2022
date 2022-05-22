import React from "react";
import { IUser } from "../../types";
import Profile from "../Profile";
import Repositories from "../Repositories";
import "./style.scss";

interface IMainContainerProps {
  user: IUser;
}

const MainContainer = ({ user }: IMainContainerProps) => {
  return (
    <div className="container">
      <Profile user={user} />
      <Repositories user={user} />
    </div>
  );
};

export default MainContainer;
