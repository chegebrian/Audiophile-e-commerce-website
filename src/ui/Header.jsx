import { useState } from "react";
import { NavLink } from "react-router";

function Header() {
  const [isOpen, setIsopen] = useState(false);

  function setOpen() {
    setIsopen((isOpen) => !isOpen);
  }
  return (
    <header className="flex items-center justify-between bg-black">
      <img
        src={`${isOpen ? "/images/shared/tablet/icon-close-menu.svg" : "/images/shared/tablet/icon-hamburger.svg"}`}
        alt="open icon"
        className="cursor-pointer lg:hidden"
        onClick={setOpen}
      />
      <span className="cursor-pointer text-3xl font-extrabold text-white md:max-lg:ml-10">
        audiophile
      </span>
      <nav className={`items-center gap-6 lg:flex ${isOpen ? "" : "hidden"}`}>
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
      <img
        src="/images/shared/desktop/icon-cart.svg"
        alt="cart"
        className="cursor-pointer md:max-lg:ml-auto"
      />
    </header>
  );
}

export default Header;
