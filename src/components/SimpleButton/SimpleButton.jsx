import React from "react";
import "./SimpleButton.scss";

function SimpleButton(props) {
  return <button className="button">{props.name}</button>;
}

export default SimpleButton;
