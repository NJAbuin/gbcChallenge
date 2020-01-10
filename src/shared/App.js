import React from "react";
import MainGrid from "./MainGrid";
import "./App.css";

const App = ({ articles }) => {
  return (
    <div className="App">
      {console.log(articles)}
      <MainGrid />
    </div>
  );
};

export default App;
