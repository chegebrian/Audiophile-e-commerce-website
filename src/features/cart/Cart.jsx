import React from "react";
import CartRow from "./CartRow";

function Cart({ cartIsOpen, cart }) {
  const cartTotal = cart?.reduce((previousItem, currentItem) => {
    console.log(currentItem);
    
    const { quantity, product:{price} } = currentItem;
    console.log(quantity, price);
    
    previousItem += quantity * price;

    return previousItem;
  }, 0);
  return (
    <div
      className={` ${cartIsOpen ? "" : "hidden"} absolute top-36 z-50 rounded-lg bg-slate-50 px-4 py-6`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-slate-700 uppercase">
          cart ({cart?.length})
        </h3>
        <span className="text-slate-700 capitalize underline">remove all</span>
      </div>
      {cart?.map((product, index) => (
        <CartRow product={product} key={index} />
      ))}
      <div className="flex items-center justify-between">
        <span className="text-slate-700 uppercase">total</span>
        <span className="font-bold text-slate-900">{cartTotal}</span>
      </div>
      <button className="w-full cursor-pointer bg-amber-600 px-5 py-2 font-semibold tracking-wider text-slate-50 uppercase hover:bg-amber-500">
        checkout
      </button>
    </div>
  );
}

export default Cart;
