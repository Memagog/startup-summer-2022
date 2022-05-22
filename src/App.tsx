import React, { ReactElement, useState } from "react";
import { Loader, MainContainer, Message, SearchBar } from "./Components";
import "./App.scss";
import { NotFoundIcon, SearchIcon } from "./resources/icons";
import { IUser } from "./types";

const App = (): ReactElement => {
  const [response, setResponse] = useState<IUser | undefined>();
  const [search, setSearch] = useState<string>("");
  const [loaded, setLoaded] = useState<boolean>(true);
  const [first, setFirst] = useState<boolean>(true);
  const onSearch = (search: string) => setSearch(search);

  const handleSubmit = (e: any) => {
    setFirst(false);
    setLoaded(false);
    e.preventDefault();
    const fetchData = async () => {
      try {
        const result = await (
          await fetch(`https://api.github.com/users/${search}`)
        ).json();
        if (result.message === "Not Found") {
          setResponse(undefined);
          setLoaded(true);
        } else {
          setResponse(result);
        }
      } catch (error) {
        setLoaded(false);
        console.log(error);
      }
    };
    const timer = setTimeout(() => {
      fetchData();
      setLoaded(true);
    }, 2000);
    return () => clearTimeout(timer);
  };

  return (
    <div>
      <SearchBar
        handleSubmit={handleSubmit}
        onSearch={onSearch}
        search={search}
      />
      {response ? (
        loaded ? (
          <MainContainer user={response} />
        ) : (
          <Loader />
        )
      ) : loaded ? (
        first ? (
          <Message
            icon={<SearchIcon width={64} height={64} />}
            message={`Start with searching a GitHub user`}
          />
        ) : (
          <Message icon={<NotFoundIcon />} message={`User not found`} />
        )
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default App;
