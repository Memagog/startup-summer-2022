import React from "react";
import Profile from "../Profile";
import Repositories from "../Repositories";
import './style.scss';

interface IMainContainerProps {
  user: any;
};

const MainContainer = ({ user }: IMainContainerProps) => {
  return (
    <div className="container">
      <Profile user={user}/>
      <Repositories />
    </div>
  );
};

export default MainContainer;
