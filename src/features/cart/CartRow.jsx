import React, { useState } from "react";
import { useProducts } from "../../contexts/ProductContext";

function CartRow({ product }) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  
  const { dispatch } = useProducts();

  return (
    <div className="flex items-center justify-between gap-24">
      <div className="my-4 grid gap-4 lg:grid-cols-2 lg:gap-28">
        <div className="flex items-center gap-6">
          <img
            src={product.product?.cartImage}
            alt={product.product?.shortName}
            className="w-full rounded-lg object-contain"
          />
          <div>
            <h2 className="text-center text-xs font-bold tracking-wide uppercase">
              {product.product?.shortName}
            </h2>

            <span className="text-xs font-bold text-slate-700">
              {formatter.format(product.product?.price)}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <button
          onClick={() =>
            dispatch({ type: "decreaseQuantityfromCart", payload: product })
          }
          className="cursor-pointer bg-[#dbdbdb75] px-4 py-2 font-semibold outline-0 hover:bg-[#dbdbdb] hover:text-amber-600"
        >
          -
        </button>
        <span className="bg-[#dbdbdb75] px-4 py-2 font-semibold">
          {product.quantity}
        </span>
        <button
          onClick={() =>
            dispatch({ type: "increaseQuantityfromCart", payload: product })
          }
          className="cursor-pointer bg-[#dbdbdb75] px-4 py-2 font-semibold outline-0 hover:bg-[#dbdbdb] hover:text-amber-600"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CartRow;
