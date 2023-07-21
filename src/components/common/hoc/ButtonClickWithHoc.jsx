import React from "react";
import HigherOrderComponent from "./HigherOrderComponent";

const ButtonClickWithHoc = (props) => {
  return (
    <div>
      <p>Counter Value is: {props.counter}</p>
      <br />
      <button onClick={props.handleClick}>INC Counter</button>
    </div>
  );
};

export default HigherOrderComponent(ButtonClickWithHoc);
