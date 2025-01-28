import React from 'react'

function EarphoneCard() {
  return (
    <div className="bg-gray-100 rounded-xl flex items-center flex-col p-6 group">
      <img
        className="w-32 -mt-18"
        src="/images/shared/desktop/image-earphones.png"
        alt="headphones"
      />
      <h3 className="uppercase tracking-widest font-bold mb-3 text-black">earphones</h3>
      <span className="flex items-center gap-3 uppercase tracking-wider font-semibold text-slate-800 group-hover:text-amber-600 transition duration-300 ">
        shop{" "}
        <img
          src="/images/shared/desktop/icon-arrow-right.svg"
          alt="right arrow"
        />
      </span>
    </div>
  )
}

export default EarphoneCard