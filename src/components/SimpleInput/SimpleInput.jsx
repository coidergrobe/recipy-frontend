import React from "react";
import "./SimpleInput.css";

function SimpleInput(props) {
  return <input className="input" type={props.type} />;
}

export default SimpleInput;
