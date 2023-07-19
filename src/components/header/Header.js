import { useState, useEffect, useRef } from "react";
import { ReactComponent as HeroIcon } from "../../assets/images/logo.svg";
import { ReactComponent as DarkThemeIcon } from "../../assets/images/dark-theme.svg";
import { ReactComponent as LightThemeIcon } from "../../assets/images/light-theme.svg";
// import DrakThemeIcon from "../../assets/images/dark-theme.svg";
// import LightThemeIcon from "../../assets/images/light-theme.svg";
import UserIcon from "../../assets/images/user.png";
import Dropdown from "../common/Dropdown";
import { Link } from "react-router-dom";

const Header = ({ theme, settheme, setsearchText }) => {
  const [text, settext] = useState("");
  const [isOpen, setisOpen] = useState(false);
  const ref = useRef(null);
  // const changeTheme = () => {
  //   if (theme === "light") {
  //     settheme("dark");
  //   } else {
  //     settheme("light");
  //   }
  // };

  const handleChange = (e) => {
    settext(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e.keyCode === 13) {
      setsearchText(e.target.value);
    }
  };

  const handleClick = () => {
    setisOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setisOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <header className={`header content-wrapper ${theme}`}>
      <div className="hero-section">
        <Link to="/">
          {/* <img src={HeroIcon} alt="hero" /> */}
          <HeroIcon className="hero-image icon-image" />
          <span className="hero-title">React</span>
        </Link>
      </div>
      <div className="right-content">
        <div className="search-bar">
          <input
            type="search"
            placeholder="Search.."
            value={text}
            onChange={handleChange}
            onKeyDown={handleSubmit}
            // onChange={function (e) {
            //   setsearchText(e.target.value);
            // }}
            // onChange={(e) => setsearchText(e.target.value)}
          />
        </div>
        <div className="nav-items">
          <Link to="/learn" className="nav-item link-item">
            Learn
          </Link>
          <Link to="/reference" className="nav-item link-item">
            Reference
          </Link>
          <Link to="/community" className="nav-item link-item">
            Community
          </Link>
          <Link to="/blog" className="nav-item link-item">
            Blog
          </Link>
          {theme === "light" ? (
            <button
              className="nav-item click-item"
              onClick={function () {
                settheme("dark");
              }}
            >
              {/* <img src={LightThemeIcon} alt="light-theme" /> */}
              <LightThemeIcon className="icon icon-image" />
            </button>
          ) : (
            <button
              className="nav-item click-item"
              onClick={() => settheme("light")}
            >
              {/* <img src={DrakThemeIcon} alt="dark-theme" /> */}
              <DarkThemeIcon className="icon icon-image" />
            </button>
          )}
          <div ref={ref}>
            <button className="nav-item click-item" onClick={handleClick}>
              <img src={UserIcon} alt="user" className="icon" />
            </button>
            {isOpen && <Dropdown />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
