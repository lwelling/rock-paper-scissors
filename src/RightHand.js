import React from "react";

import rockR from "./assets/rockR.jpg";
import paperR from "./assets/paperR.jpg";
import scissorsR from "./assets/scissorsR.jpg";

export default function RightHand(props) {
  if (props.rightHand === "rock") {
    return <img src={rockR} alt="rock right" />;
  } else if (props.rightHand === "paper") {
    return <img src={paperR} alt="paper right" />;
  } else {
    return <img src={scissorsR} alt="scissors right" />;
  }
}
