import React from "react";
import { NavLink } from "react-router";

function HeadphoneCard() {
  return (
    <NavLink to="/headphones" className="bg-gray-100 rounded-xl w-full flex items-center flex-col p-6 group">
      <img
        className=" h-36 sm:object-cover object-contain -mt-18"
        src="/images/shared/desktop/image-headphones.png"
        alt="headphones"
      />
      <h3 className="uppercase tracking-widest font-bold mb-3 text-black">headphones</h3>
      <span className="flex items-center gap-3 uppercase tracking-wider font-semibold text-slate-800 group-hover:text-amber-600 transition duration-300">
        shop{" "}
        <img
          src="/images/shared/desktop/icon-arrow-right.svg"
          alt="right arrow"
        />
      </span>
    </NavLink>
  );
}

export default HeadphoneCard;
