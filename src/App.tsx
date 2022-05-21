import React, { ReactElement, useState } from "react";
import { MainContainer, SearchBar } from "./Components";
import "./App.scss";
export interface IState {
  username: string;
  timer: boolean;
  loaded: boolean;
}
const App = (): ReactElement => {
  const [response, setResponse] = useState();
  const [state, setState] = useState<IState>({
    username: "",
    timer: false,
    loaded: true,
  });

  const handleSubmit = (e: any) => {
    setState({ ...state, timer: true });
    e.preventDefault();
    const fetchData = async () => {
      try {
        const result = await (
          await fetch(`https://api.github.com/users/${state.username}`)
        ).json();
        if (result.message === "Not Found") {
          setState({ ...state, loaded: false });
        } else {
          setResponse(result);
          setState({ ...state, loaded: true });
        }
      } catch (error) {
        setState({ ...state, loaded: false });
        console.log(error);
      }
    };
    const timer = setTimeout(() => {
      fetchData();
      setState({ ...state, timer: true });
    }, 2000);
    return () => clearTimeout(timer);
  };

  return (
    <div>
      <SearchBar
        handleSubmit={handleSubmit}
        setState={setState}
        state={state}
      />
      {response ? <MainContainer user={response}/> : <div>Test</div>}
    </div>
  );
};

export default App;
