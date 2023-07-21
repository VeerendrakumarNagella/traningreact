import { useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";
import "./assets/css/root.css";
import "./assets/scss/index.scss";
import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./components/common/RouterConfig";
import ErrorBoundary from "./components/common/ErrorBoundary";

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
        <ErrorBoundary>
          <Header
            brandName={brandName}
            getUserData={getUserData}
            theme={theme}
            settheme={settheme}
            searchText={searchText}
            setsearchText={setsearchText}
          />
        </ErrorBoundary>
        <section className="main-content">
          <ErrorBoundary>
            <RouterConfig userData={userData} searchText={searchText} />
          </ErrorBoundary>
        </section>
        <ErrorBoundary>
          <Footer brandName={brandName} />
        </ErrorBoundary>
      </div>
    </BrowserRouter>
  );
};

export default App;
