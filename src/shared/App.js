import React from "react";
import MainGrid from "./MainGrid";
import "./App.css";

const App = ({ articles }) => {
  return (
    <div className="App">
      <MainGrid articles={articles} />
    </div>
  );
};

export default App;
