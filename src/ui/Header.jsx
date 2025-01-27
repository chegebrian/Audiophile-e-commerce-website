import React, { useState } from "react";
import { NavLink } from "react-router";

function Header() {
  return (
    <header className="flex items-center justify-between bg-black">
      <span className="cursor-pointer text-3xl font-extrabold text-white">
        audiophile
      </span>
      <nav className="flex items-center gap-6">
        <NavLink
          to="/"
          className="text-sm font-bold tracking-widest text-white uppercase transition duration-300 hover:text-amber-600"
        >
          home
        </NavLink>
        <NavLink
          to="/headphones"
          className="text-sm font-bold tracking-widest text-white uppercase transition duration-300 hover:text-amber-600"
        >
          headphones
        </NavLink>
        <NavLink
          to="/speakers"
          className="text-sm font-bold tracking-widest text-white uppercase transition duration-300 hover:text-amber-600"
        >
          speakers
        </NavLink>
        <NavLink
          to="/earphones"
          className="text-sm font-bold tracking-widest text-white uppercase transition duration-300 hover:text-amber-600"
        >
          earphones
        </NavLink>
      </nav>
      <img src="/images/shared/desktop/icon-cart.svg" alt="cart" />
    </header>
  );
}

export default Header;
