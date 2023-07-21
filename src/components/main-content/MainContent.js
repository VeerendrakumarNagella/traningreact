import { useState, useEffect } from "react";
import axios from "axios";
import ButtonClickWithHoc from "../common/hoc/ButtonClickWithHoc";
import ButtonHoverWithHoc from "../common/hoc/ButtonHoverWithHoc";

const MainContent = (props) => {
  const [userData, setuserData] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => setuserData(data))
  //     .catch((err) => console.log("error", err));
  // }, []);

  useEffect(() => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => setuserData(res.data))
    //   .catch((err) => console.log(err));
    // axios("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => setuserData(res.data))
    //   .catch((err) => console.log(err));
    // axios({
    //   method: "get",
    //   url: "https://jsonplaceholder.typicode.com/users",
    // })
    //   .then((res) => setuserData(res.data))
    //   .catch((err) => console.log(err));

    getUsersData();
    // throw new Error("Error");
  }, []);

  const getUsersData = async () => {
    try {
      const res = await axios({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/users",
      });
      setuserData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async () => {
    try {
      await axios({
        method: "post",
        url: "https://jsonplaceholder.typicode.com/todos",
        data: { title: "my title", completed: true },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="home-content">
      <br />
      <button onClick={handleClick}>Display Table</button>
      <br />
      <br />
      <ButtonClickWithHoc />

      <br />
      <br />
      <ButtonHoverWithHoc />
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>S. No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {userData.length ? (
            userData.map((user, index) => {
              return (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.company.name}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={4}>No users data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MainContent;
