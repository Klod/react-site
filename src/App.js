import React from "react";
import ReactTypingEffectDemo from "./components/reactTypingEffect";
import "./App.css";
import Header from "./components/header";
import Signups from "./components/signups";

const banner = (
  <div className="banner">
    <div className="typewriter">
      <h2>Welcome to my page!</h2>
      <h3>I am Kirill,</h3>
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
      <Header />
      <ReactTypingEffectDemo />
      {banner}
      <Signups />
    </div>
  );
}

export default App;
