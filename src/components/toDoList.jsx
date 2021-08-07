import React, { useState } from "react";

function ToDOList(props) {
  const [strike, setStrike] = useState(false);

  return (
    <li
      onClick={props.onChecked}
      style={{ textDecoration: strike ? "line-through" : "none" }}
    >
      {props.texto}
    </li>
  );
}

export default ToDOList;
