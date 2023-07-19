import { useState, useEffect } from "react";

const Signup = (props) => {
  const [buttonLabel, setButtonLabel] = useState("Signup");

  useEffect(() => {
    setButtonLabel("Signup ");
    console.log("From mount: Signup");

    return function () {
      console.log("Un mount: Signup");
    };
  }, []);

  useEffect(() => {
    console.log("From update: Signup");

    return () => {
      console.log("Cleanup: Signup");
    };
  }, [buttonLabel]);

  const getButtonLabel = () => {
    console.log("From screen paint: singup");
    return buttonLabel;
  };

  return <button onClick={props.handleClick}>{getButtonLabel()}</button>;
};

export default Signup;

// mounting, updation, unmount

// jsx, state, props, life cycle methods, conditional rendering
