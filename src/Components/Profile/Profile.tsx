import React from "react";
import { FollowersIcon, FollowingIcon } from "../../resources/icons";
import { IUser } from "../../types";
import "./style.scss";

interface IProfileProps {
  user: IUser;
}

const Profile = ({ user }: IProfileProps) => {
  return (
    <div className="profile">
      <img src={user?.avatar_url} alt="" className="profile-image" />
      <h2 className="profile-name">{user.name}</h2>
      <p className="profile-login">
        <a target="_blank" href={user.html_url} className="profile-login">
          {user.login}
        </a>
      </p>
      <div className="follow">
        <div className="followers">
          <FollowersIcon />
          <span className="followers_text">{`${
            user.followers > 1000
              ? Math.ceil(user.followers / 1000) + "K"
              : user.followers
          } followers`}</span>
        </div>
        <div className="following">
          <FollowingIcon />
          <span className="following_text">{user.following} following</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
