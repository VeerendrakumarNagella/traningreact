import { useState /* useRef */ } from "react";

const MainContent = (props) => {
  const [titleName, setTitleName] = useState("Main section");
  // const [userName, setUserName] = useState("");
  // const userNameRef = useRef();

  const handleClick = () => {
    setTitleName("Clicked Section");
    // const val = userNameRef;
    // console.log(val.current.value);
  };

  // const handleChange = (e) => {
  //   setUserName(e.target.value);
  // };

  return (
    <div className="home-content">
      <div>
        <h2 id="demo">
          This is {titleName} is coming from the user narendra{" "}
          {props?.userData?.name} and the age is {props?.userData?.age}
        </h2>
      </div>
      <br />
      <p>
        Your search term is{" "}
        <strong>
          <em>{props?.searchText}</em>
        </strong>
      </p>
      <br />
      <button className="info" onClick={handleClick}>
        Change Name
      </button>
      <button className="alert" onClick={handleClick}>
        Change Name
      </button>
      <button className="success" onClick={handleClick}>
        Change Name
      </button>
      <button onClick={handleClick}>Change Name</button>
      <br />
      <br />
      {/* <input
        type="text"
        id="userName"
        // value={userName}
        // onChange={handleChange}
        ref={userNameRef}
        placeholder="User..."
      />
      <br />
      <br />
      <h3>{userName}</h3> */}
    </div>
  );
};

export default MainContent;
