import { useState } from "react";
import { NavLink } from "react-router";
import HeadphoneCard from "../features/headphones/HeadphoneCard";
import SpeakerCard from "../features/speakers/SpeakerCard";
import EarphoneCard from "../features/earphones/EarphoneCard";
import EmptyCart from "../features/cart/EmptyCart";
import { useProducts } from "../contexts/ProductContext";
import Cart from "../features/cart/Cart";

function Header() {
  const [isOpen, setIsopen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const { cart } = useProducts();
  function setOpenCart() {
    setCartIsOpen((cartIsOpen) => !cartIsOpen);
  }

  function setOpen() {
    setIsopen((isOpen) => !isOpen);
  }
  return (
    <header className="flex h-24 items-center justify-between border-b border-[#d9d9d954] px-8 max-lg:relative lg:px-30 xl:mx-auto xl:max-w-[1280px]">
      <img
        src={`${isOpen ? "/images/shared/tablet/icon-close-menu.svg" : "/images/shared/tablet/icon-hamburger.svg"}`}
        alt="open icon"
        className="cursor-pointer lg:hidden"
        onClick={setOpen}
      />
      <h1 className="cursor-pointer text-3xl font-extrabold text-white md:max-lg:ml-10">
        audiophile
      </h1>
      <nav className="max-lg:absolute max-lg:top-50 max-lg:right-[0] max-lg:left-[0] max-lg:z-40 max-lg:flex max-lg:items-center max-lg:justify-center max-lg:gap-6 max-md:flex-col max-md:gap-20 lg:flex lg:items-center lg:gap-6">
        <NavLink
          to="/"
          className="hidden text-sm font-bold tracking-widest text-white uppercase transition duration-300 hover:text-amber-600 lg:block"
        >
          home
        </NavLink>
        <NavLink
          to="/headphones"
          className="hidden text-sm font-bold tracking-widest text-white uppercase transition duration-300 hover:text-amber-600 lg:block"
        >
          headphones
        </NavLink>
        <NavLink
          to="/speakers"
          className="hidden text-sm font-bold tracking-widest text-white uppercase transition duration-300 hover:text-amber-600 lg:block"
        >
          speakers
        </NavLink>
        <NavLink
          to="/earphones"
          className="hidden text-sm font-bold tracking-widest text-white uppercase transition duration-300 hover:text-amber-600 lg:block"
        >
          earphones
        </NavLink>
        <ul
          className={`flex items-center ${isOpen ? "" : "hidden"} z-40 w-full flex-col gap-16 bg-white sm:flex-row sm:gap-4 lg:hidden`}
        >
          <HeadphoneCard />
          <SpeakerCard />
          <EarphoneCard />
        </ul>
      </nav>
      {cart.length > 0 ? <Cart cartIsOpen={cartIsOpen} cart={cart} /> : <EmptyCart cartIsOpen={cartIsOpen} />}
      <div className="relative">
        <img
          src="/images/shared/desktop/icon-cart.svg"
          alt="cart"
          className="w-8 cursor-pointer md:max-lg:ml-auto"
          onClick={setOpenCart}
        />
        <span className="absolute -top-3 -right-4 flex h-6 w-6 items-center justify-center rounded-full bg-amber-600 text-xs text-slate-100">
          {cart?.length}
        </span>
      </div>
    </header>
  );
}

export default Header;
