import { useState } from "react";

const HigherOrderComponent = (Component) => {
  return function InnerComponent() {
    const [counter, setcounter] = useState(0);

    const handleClick = () => setcounter(counter + 1);
    return <Component handleClick={handleClick} counter={counter} />;
  };
};

export default HigherOrderComponent;
