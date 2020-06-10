import React from "react";
import Clock from "./Clock";
import Gameboard from "./Gameboard";
import Controls from "./Controls";
import "./styles/App.scss";

export default function App() {
  return (
    <div id="App">
      <div id="game">
        <Clock />
        <Gameboard />
        <Controls />
      </div>
    </div>
  );
}
