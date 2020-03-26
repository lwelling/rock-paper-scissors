import React, { useState, useEffect } from "react";
import "./App.css";
import LeftHand from "./LeftHand";
import RightHand from "./RightHand";
import ScoreBoard from "./ScoreBoard";

function App() {
  const [leftHand, setLeft] = useState("");
  const [rightHand, setRight] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      setRight("rock");
    } else if (randomNumber === 1) {
      setRight("paper");
    } else if (randomNumber === 2) {
      setRight("scissors");
    }
  });

  function handleClick (pick) {
    setLeft(pick)
    setCount(count + 1)
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <LeftHand leftHand={leftHand} />
        <RightHand rightHand={rightHand} />
      </div>
      <div>
        <ScoreBoard count={count} leftHand={leftHand} rightHand={rightHand} />
      </div>
      <div className="App">
        <button onClick={() => handleClick("rock")}>ROCK</button>
        <button onClick={() => handleClick("paper")}>PAPER</button>
        <button onClick={() => handleClick("scissors")}>SCISSORS</button>
      </div>
    </>
  );
}

export default App;
