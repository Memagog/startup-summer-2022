import React from "react";
import FollowersIcon from "../../icons/FollowersIcon";
import FollowingIcon from "../../icons/FollowingIcon";
import "./style.scss";

interface IProfileProps {
  user: {
    avatar_url: string;
    followers: number;
    following: number;
    id: number;
    name: string;
    login: string;
    public_gists: number;
    public_repos: number;
    repos_url: string;
    starred_url: string;
    subscriptions_url: string;
    url: string;
  };
}

const Profile = ({ user }: IProfileProps) => {
  return (
    <div className="profile">
      <img src={user?.avatar_url} alt="" className="profile-image" />
      <h2 className="profile-name">{user.name}</h2>
      <p className="profile-login">{user.login}</p>
      <div className="follow">
        <div className="followers">
          <FollowersIcon />
          <span className="followers_text">{user.followers} followers</span>
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
