import React from "react";
import Header from "./components/Header";
import { Router } from "@reach/router";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Launches from "./components/Launches";
import Missions from "./components/Missions";
import Capsules from "./components/Capsules";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Router>
        <Home path="/" />
        <Launches path="/launches" />
        <Missions path="/missions" />
        <Capsules path="/capsules" />
      </Router>
    </div>
  );
}

export default App;
