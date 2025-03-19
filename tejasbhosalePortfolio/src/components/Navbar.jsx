import "./styles/navbar.min.css";
import { useState, useEffect } from "react";
import { WiDaySunny } from "react-icons/wi";
import { BsMoonStars } from "react-icons/bs";
import LandingPage from "./LandingPage";
import { LiaBarsSolid } from "react-icons/lia";

import { MdWavingHand } from "react-icons/md";
const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [menuOpen, setMenuOpen] = useState(false);
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
        <div className="row nav-row">
          <div className="col-6">
            <h2 className="nav-name">TEJAS</h2>
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
            <button
              className={`menu-button ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <div className="hamburger_9_wrap">
                <div className="hamburger_9_line"></div>
                <div className="hamburger_9_line"></div>
                <div className="hamburger_9_line"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row intro-section">
          <div className="col-12 intro-column">
            <h1 className="intro-greeting">
              {" "}
              Hi, I'm Tejas <MdWavingHand style={{ color: "yellow" }} />
            </h1>
            <p className="intro-greeting">Developer ---------&gt; Coder</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
