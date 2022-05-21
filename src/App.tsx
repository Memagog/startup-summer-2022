import React, { ReactElement } from "react";
import { MainContainer, SearchBar } from "./Components";
import "./App.scss";

const App = (): ReactElement => {
  return (
    <div>
      <SearchBar />
      <MainContainer />
    </div>
  );
};

export default App;
