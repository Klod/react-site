import React from "react";

import "./App.css";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
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
    </div>
  );
}

export default App;
