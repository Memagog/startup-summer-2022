export interface IUser {
  avatar_url: string;
  followers: number;
  following: number;
  id: number;
  name: string;
  login: string;
  public_repos: number;
  repos_url: string;
  html_url: string;
}

export interface IRepo {
  description: string;
  id: string;
  html_url: string;
  name: string;
}