import React from "react";
import NavUl from "./data_navbar/NavUl";


const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <div className="container w-50 text-light fs-4 fw-bold align-middle">
        <a href="#" className="nav-link">
          Start Bootstrap
        </a>
      </div>
      <NavUl />
    </nav>
  );
}

export default Navbar;