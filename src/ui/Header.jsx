import { useState } from "react";
import { NavLink } from "react-router";
import HeadphoneCard from "../features/headphones/HeadphoneCard";
import SpeakerCard from "../features/speakers/SpeakerCard";
import EarphoneCard from "../features/earphones/EarphoneCard";

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
          className="hidden text-sm font-bold tracking-widest text-white uppercase transition duration-300 hover:text-amber-600 lg:block"
        >
          home
        </NavLink>
        <NavLink to="/headphones">
          <span className="hidden text-sm font-bold tracking-widest text-white uppercase transition duration-300 hover:text-amber-600 lg:block">
            headphones
          </span>
          <span className="lg:hidden">
            <HeadphoneCard />
          </span>
        </NavLink>
        <NavLink to="/speakers">
          <span className="hidden text-sm font-bold tracking-widest text-white uppercase transition duration-300 hover:text-amber-600 lg:block">
            speakers
          </span>
          <span className="lg:hidden">
            <SpeakerCard />
          </span>
        </NavLink>
        <NavLink to="/earphones">
          <span className="hidden text-sm font-bold tracking-widest text-white uppercase transition duration-300 hover:text-amber-600 lg:block">
            earphones
          </span>
          <span className="lg:hidden">
            <EarphoneCard />
          </span>
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
