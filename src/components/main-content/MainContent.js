import { useState } from "react";

const MainContent = (props) => {
  let headerName = "Test";
  const [titleName, setTitleName] = useState("Main section");
  const [count, setcount] = useState(0);

  const handleClick = () => {
    setTitleName("Clicked Section");
    headerName = "Tested";
    console.log(headerName, titleName);
  };

  return (
    <div>
      <div style={{ color: "cadetblue", padding: "10px", marginLeft: "30px" }}>
        <h2 id="demo">
          This is {titleName} {headerName} is coming from the user{" "}
          {props.userData.name} and the age is {props.userData.age}
        </h2>
      </div>
      <br />
      <p>
        This is content section used for context, This is content section used
        for context, This is content section used for context, This is content
        section used for context
      </p>
      <br />
      <br />
      <button onClick={() => setcount(count + 1)}>Increment</button> &nbsp;
      {count} &nbsp;
      <button onClick={() => setcount(count - 1)}>Decrement</button> &nbsp;
      <button onClick={() => setcount(0)}>Reset</button>
      <br />
      <br />
      <br />
      <button onClick={handleClick}>Change Name</button>
      {/* <button onclick="handleClick()">Change Name</button> */}
      <br />
      <br />
      <hr />
    </div>
  );
};

export default MainContent;
