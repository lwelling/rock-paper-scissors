import React from "react";
import ScoreText from "./ScoreText";

export default function ScoreBoard(props) {
  let leftHand = props.leftHand
  let rightHand = props.rightHand
  let count = props.count
  return (
    <>
      <h1 style={{ textAlign: "center" }}>ROUND {count}</h1>
      <ScoreText count={count} leftHand={leftHand} rightHand={rightHand} />
    </>
  );
}
