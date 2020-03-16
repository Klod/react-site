import React from "react";

import "./App.css";
import Header from "./components/header";

const banner = (
  <div className="banner">
    <div className="typewriter">
      <h2>Welcome to my page!</h2>
      <h1>
        I am Kirill, <div id="stmt1">Acquistion strategist</div>
        <div id="stmt2">Campaign executioner</div>
        <div id="stmt3">Semi-technical marketing lead</div>
      </h1>
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
      <Header />
      {banner}
    </div>
  );
}

export default App;
