import "./styles/navbar.min.css";
import { useState, useEffect } from "react";
import { WiDaySunny } from "react-icons/wi";
import { BsMoonStars } from "react-icons/bs";
import LandingPage from "./LandingPage";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="navbar-main">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h2 className="nav-name">tejas</h2>
          </div>

          <div className="col-6 right-menu">
            <label className="theme-switch">
              <input
                type="checkbox"
                onChange={toggleTheme}
                checked={theme === "dark"}
              />
              <span className="slider">
                {theme === "light" ? (
                  <WiDaySunny className="icon sun" />
                ) : (
                  <BsMoonStars
                    className="icon moon"
                    style={{ fontSize: "14px" }}
                  />
                )}
              </span>
            </label>
            <button className="menu-icon">☰</button>
          </div>
        </div>
        <div className="row">
          hello!. I am Tejas, I like building tech and exploring the new
          possiblits!
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
