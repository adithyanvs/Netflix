import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [Show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });

    return () => window.removeEventListener('scroll', () => {});
  }, []);

  return (
    <div className={`nav ${Show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
        alt="netflix logo"
      />
    </div>
  );
}

export default Nav;
