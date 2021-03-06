import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src="./netflixlogo.png" alt="Netflix Logo" />
      <img
        className="nav_avatar"
        src="https://funnyjunk.com/Netflix/cknqMpx/56"
        alt="Netflix avatar"
      />
    </div>
  );
}

export default Nav;
