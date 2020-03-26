import React from 'react';

export default function ScoreText(props) {
  if (props.leftHand) {
    if (props.leftHand === props.rightHand) {
      return <h1 style={{ textAlign: "center" }}>Draw</h1>;
    } else if (
      (props.leftHand === "paper" && props.rightHand === "scissors") ||
      (props.leftHand === "rock" && props.rightHand === "paper") ||
      (props.leftHand === "scissors" && props.rightHand === "rock")
    ) {
      return <h1 style={{ textAlign: "center" }}>YOU LOSE!</h1>;
    } else {
      return <h1 style={{ textAlign: "center" }}>YOU WIN!</h1>;
    }
  } else {
    return <h1 style={{ textAlign: "center" }}>Pick one...</h1>;
  }
}
