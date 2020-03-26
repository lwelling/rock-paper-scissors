import React from "react";

import rockL from "./assets/rockL.jpg";
import paperL from "./assets/paperL.jpg";
import scissorsL from "./assets/scissorsL.jpg";

export default function LeftHand(props) {
  if (props.leftHand === "rock") {
    return <img src={rockL} alt="rock left" />;
  } else if (props.leftHand === "paper") {
    return <img src={paperL} alt="paper left" />;
  } else {
    return <img src={scissorsL} alt="scissors left" />;
  }
}
