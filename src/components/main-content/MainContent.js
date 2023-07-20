import { useState } from "react";

const MainContent = (props) => {
  let headerName = "Test";
  const [titleName, setTitleName] = useState("Main section");

  const handleClick = () => {
    setTitleName("Clicked Section");
    headerName = "Tested";
    console.log(headerName, titleName);
  };

  return (
    <div>
      <div style={{ color: "red", padding: "10px", marginLeft: "30px" }}>
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
      <button onClick={handleClick}>Change Name</button>
      <br />
      <br />
      <hr />
    </div>
  );
};

export default MainContent;
