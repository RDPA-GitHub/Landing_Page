import React from "react";
import NavLi from "./NavLi";
import { DataNavbar } from "../../data/data";

const NavUl = () => {
  return (
    <ul className="nav ms-auto w-25 text-white">
      {DataNavbar.map((valor) => {
        return (
          <NavLi
            valor_li={valor}
          />
        );
      })}
    </ul>
  );
}

export default NavUl;