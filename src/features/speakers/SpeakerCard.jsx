import React from 'react'
import { NavLink } from 'react-router'

function SpeakerCard() {
  return (
    <NavLink to="/speakers" className="bg-gray-100 rounded-xl flex items-center flex-col w-full p-6 group">
      <img
        className="h-36 sm:object-cover object-contain -mt-18"
        src="/images/shared/desktop/image-speakers.png"
        alt="headphones"
      />
      <h3 className="uppercase tracking-widest font-bold mb-3 text-black">speakers</h3>
      <span className="flex items-center gap-3 uppercase tracking-wider font-semibold text-slate-800 group-hover:text-amber-600 transition duration-300">
        shop{" "}
        <img
          src="/images/shared/desktop/icon-arrow-right.svg"
          alt="right arrow"
        />
      </span>
    </NavLink>
  )
}

export default SpeakerCard