import { Link, useLocation } from "react-router-dom";
import Logo from "../../../media/logo.svg";
import "./styles.css";
import Button from "../../shared/button";
import { useEffect } from "react";

function Navbar() {
  const location = useLocation();
  let pathname = location.pathname;

  const handleHamburgerClick = () => {
    const collapseNavbar = document.querySelector(".collapse-nav");
    const hamburger = document.querySelector(".hamburger");
    collapseNavbar.classList.toggle("active");
    hamburger.classList.toggle("active");
  };

  useEffect(() => {
    const collapseNavbar = document.querySelector(".collapse-nav");
    collapseNavbar.classList.remove("active");
    const hamburger = document.querySelector(".hamburger");
    hamburger.classList.remove("active");
  });

  return (
    <nav className="navbar">
      <div className="nav-container mx-auto">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Link to="/">
              <img
                src={Logo}
                className="navbrand"
                alt="Showcase talents and uncover opportunities"
              />
            </Link>
          </div>
          <div className="hamburger" onClick={handleHamburgerClick}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="collapse-nav" id="tm">
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/"
                  className={`nav-link ${pathname === "/" ? "first" : ""}`}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/timetable"
                  className={`nav-link ${
                    pathname === "/timetable" ? "first" : ""
                  }`}
                >
                  Timetable
                </Link>
              </li>
              <li>
                <Link
                  to="/notes"
                  className={`nav-link ${pathname === "/notes" ? "first" : ""}`}
                >
                  Notes
                </Link>
              </li>
              <li>
                <Link
                  to="/read"
                  className={`nav-link ${pathname === "/read" ? "first" : ""}`}
                >
                  Read
                </Link>
              </li>
            </ul>
            <Button
              content="Sign In"
              link="https://app.talenlio.com/auth/login"
              variant="secondary"
              style={{ marginLeft: "2rem" }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
