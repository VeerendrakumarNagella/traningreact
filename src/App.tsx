import { useState, useMemo, FC } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";
import "./assets/css/root.css";
import "./assets/scss/index.scss";
import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./components/common/RouterConfig";
import ErrorBoundary from "./components/common/ErrorBoundary";
import BrandContext, {
  AppContext,
  ThemeContext,
} from "./components/utils/AppContext";

const App: FC = () => {
  const brandName = "JavaScript";
  const [userData, setuserData] = useState({});
  const [theme, settheme] = useState("light");
  const [searchText, setsearchText] = useState("");

  const getUserData = (user: any) => {
    setuserData(user);
  };

  const themeVal = useMemo(() => theme, [theme]);

  return (
    <BrowserRouter>
      <AppContext.Provider value={searchText}>
        <ThemeContext.Provider value={themeVal}>
          <div className={`App ${theme}`}>
            <ErrorBoundary>
              <Header
                brandName={brandName}
                // getUserData={getUserData}
                settheme={settheme}
                // searchText={searchText}
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
        </ThemeContext.Provider>
      </AppContext.Provider>
    </BrowserRouter>
  );
};

export default App;
