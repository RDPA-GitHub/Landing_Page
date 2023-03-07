import React from "react";

const NavLi = ({ valor_li }) => {
  return (
    <li className="nav-item p-2 ">
      <a href="#" className="nav-link p-0 text-light">
        {valor_li}
      </a>
    </li>
  );
}

export default NavLi;