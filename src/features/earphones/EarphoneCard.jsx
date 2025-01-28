import React from 'react'

function EarphoneCard() {
  return (
    <div className="bg-gray-100 rounded-xl flex items-center flex-col">
      <img
        className="w-32 -mt-16"
        src="/images/shared/desktop/image-headphones.png"
        alt="headphones"
      />
      <h3 className="uppercase tracking-widest font-bold mb-3">earphones</h3>
      <span className="flex items-center gap-3 uppercase tracking-wider ">
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