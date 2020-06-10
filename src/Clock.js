import React, { useState } from "react";
import "./styles/Clock.scss";

export default function Clock({
  startGame,
  setStartGame,
  clock,
  setClock,
  time
}) {
  const runClock = () => {
    setStartGame(true);
    let timer = setInterval(
      () =>
        setClock(clock => {
          if (clock > 0) {
            return clock - 1;
          } else {
            setClock(time);
            setStartGame(false);
            clearInterval(timer);
          }
        }),
      1000
    );
  };
  console.log(startGame);
  return (
    <div id="Clock">
      {startGame ? null : <button onClick={() => runClock()}>START</button>}

      <h1>{clock}</h1>
    </div>
  );
}
