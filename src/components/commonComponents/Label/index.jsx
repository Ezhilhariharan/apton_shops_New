import React from "react";
import "./style.css";
const LabelText = ({ text, variety, fontSize = "0.68vw", padding = "5px" }) => {
  return (
    <span
      style={{
        fontSize: fontSize,
        padding: padding,
      }}
      className={`font-medium rounded ${variety}`}
    >
      {text}
    </span>
  );
};
export default LabelText;
