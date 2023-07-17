import { useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";
import "./assets/css/root.css";
import "./assets/scss/index.scss";
import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./components/common/RouterConfig";

const App = () => {
  const brandName = "Logo Name";
  const [userData, setuserData] = useState({});
  const [theme, settheme] = useState("light");
  const [searchText, setsearchText] = useState("");

  const getUserData = (user) => {
    setuserData(user);
  };

  return (
    <BrowserRouter>
      <div className={`App ${theme}`}>
        <Header
          brandName={brandName}
          getUserData={getUserData}
          theme={theme}
          settheme={settheme}
          searchText={searchText}
          setsearchText={setsearchText}
        />
        <section className="main-content">
          <RouterConfig userData={userData} searchText={searchText} />
        </section>
        <Footer brandName={brandName} />
      </div>
    </BrowserRouter>
  );
};

export default App;
