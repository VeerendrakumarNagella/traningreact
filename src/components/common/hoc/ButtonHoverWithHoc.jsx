import React from "react";
import HigherOrderComponent from "./HigherOrderComponent";

const ButtonHoverWithHoc = (props) => {
  return (
    <div>
      <p>Counter Value is: {props.counter}</p>
      <br />
      <button onMouseOver={props.handleClick}>INC Counter</button>
    </div>
  );
};

export default HigherOrderComponent(ButtonHoverWithHoc);
