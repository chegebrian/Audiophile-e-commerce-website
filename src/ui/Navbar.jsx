import React from "react";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <div className="flex items-center flex-col gap-6 sm:items-start md:flex-row md:items-center md:justify-between">
      <h3 className="cursor-pointer text-2xl font-extrabold text-white">audiophile</h3>
      <nav className="flex items-center flex-col gap-4 sm:flex-row sm:items-center">
        <NavLink to="/" className="text-sm font-bold tracking-widest text-white uppercase transition duration-300 hover:text-amber-600">
          home
        </NavLink>
        <NavLink to="/headphones" className="text-sm font-bold tracking-widest text-white uppercase transition duration-300 hover:text-amber-600">
          headphones
        </NavLink>
        <NavLink to="/speakers" className="text-sm font-bold tracking-widest text-white uppercase transition duration-300 hover:text-amber-600">
          speakers
        </NavLink>
        <NavLink to="/earphones" className="text-sm font-bold tracking-widest text-white uppercase transition duration-300 hover:text-amber-600">
          earphones
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
