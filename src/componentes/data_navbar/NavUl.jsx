import React from "react";
import { DataNavbar } from "../../data/data";


const NavUl = () => {
  return (
    <ul className="nav ms-auto w-25 text-white">
      {DataNavbar.map((valor, index) => {
        return (
          <a href="#" className="nav-link p-0 text-light" key={index}>
            <li className="nav-item p-2" >
              {valor}
            </li>
          </a>
        );
      })}
    </ul>
  );
}

export default NavUl;