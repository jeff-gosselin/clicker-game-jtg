import React, { useState } from "react";
import Clock from "./Clock";
import Gameboard from "./Gameboard";
import Controls from "./Controls";
import "./styles/App.scss";

export default function App() {
  const time = 60;
  const [startGame, setStartGame] = useState(false);
  const [clock, setClock] = useState(time);

  return (
    <div id="App">
      <div id="game">
        <Clock
          clock={clock}
          setClock={setClock}
          startGame={startGame}
          setStartGame={setStartGame}
          time={time}
        />
        <Gameboard startGame={startGame} />
        <Controls />
      </div>
    </div>
  );
}
