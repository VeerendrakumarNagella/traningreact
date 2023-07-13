import { useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainContent from "./components/main-content/MainContent";
import Users from "./components/Users/Users";
import "./App.css";
import "./assets/css/root.css";

const App = () => {
  const brandName = "Logo";
  const [userData, setuserData] = useState({});
  const [theme, settheme] = useState("light");

  const getUserData = (user) => {
    setuserData(user);
  };

  return (
    <div className={`App ${theme}`}>
      <Header
        brandName={brandName}
        getUserData={getUserData}
        theme={theme}
        settheme={settheme}
      />
      <MainContent userData={userData} />
      <Users/>
      <Footer brandName={brandName} />
    </div>
  );
};

export default App;
