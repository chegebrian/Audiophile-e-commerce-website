import React from "react";

function EmptyCart({ cartIsOpen }) {
  return (
    <div
      className={` ${cartIsOpen ? "" : "hidden"} absolute top-36 z-50 flex w-96 flex-col items-center justify-center gap-5 rounded-lg bg-slate-50 px-4 py-6`}
    >
      <h3 className="text-lg font-bold text-slate-700">Your cart is empty</h3>
      <img
        src="/images/cart/empty-cart.png"
        alt="empty-cart"
        className="h-20 object-contain"
      />
    </div>
  );
}

export default EmptyCart;
