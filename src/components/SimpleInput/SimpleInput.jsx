import React from "react";
import "./SimpleInput.css";

function SimpleInput(props) {
  return (
    <div className="highlight-border">
      <input className="input" type={props.type} placeholder={props.ph} />
    </div>
  );
}

export default SimpleInput;
