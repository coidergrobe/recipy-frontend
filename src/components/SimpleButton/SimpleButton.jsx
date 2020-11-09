import React from "react";
import "./SimpleButton.css";

function SimpleButton(props) {
  return <button className="button">{props.name}</button>;
}

export default SimpleButton;
