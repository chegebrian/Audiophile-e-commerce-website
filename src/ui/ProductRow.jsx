import React from "react";
import Button from "./Button";
import { useProducts } from "../contexts/ProductContext";

function ProductRow({ product }) {
  const { count, handleIncrement, handleDecrement, cart, dispatch } =
    useProducts();
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  function handleAddtoCart(product) {
    dispatch({ type: "addtocart", payload: { product, quantity: count } });
  }
  return (
    <div className="grid gap-4 lg:grid-cols-2 lg:gap-28">
      <picture>
        <source
          srcSet={product?.categoryImage?.desktop}
          media="(min-width: 1024px)"
        />
        <source
          srcSet={product?.categoryImage?.tablet}
          media="(min-width:640px)"
        />
        <img
          src={product?.categoryImage?.mobile}
          alt={product?.slug}
          className="w-full rounded-lg object-contain"
        />
      </picture>
      <div className="flex flex-col items-center gap-6 lg:items-start lg:justify-center">
        <span className="text-[1rem] tracking-[0.5em] text-amber-600 uppercase lg:text-lg">
          {product?.new ? "new product" : ""}
        </span>
        <h2 className="max-w-72 text-center text-2xl font-bold tracking-wide uppercase lg:text-start lg:text-3xl">
          {product?.name}
        </h2>

        <p className="text-slate-700 max-lg:text-center">
          {product?.description}
        </p>

        <span className="text-lg font-bold text-[#191919]">
          {formatter.format(product?.price)}
        </span>
        <div className="flex items-center gap-5">
          <div className="flex items-center">
            <button
              onClick={handleDecrement}
              className="cursor-pointer bg-[#dbdbdb75] px-5 py-3 font-semibold outline-0 hover:bg-[#dbdbdb] hover:text-amber-600"
            >
              -
            </button>
            <span className="bg-[#dbdbdb75] px-5 py-3 font-semibold">
              {count}
            </span>
            <button
              onClick={() => {
                handleIncrement();
              }}
              className="cursor-pointer bg-[#dbdbdb75] px-5 py-3 font-semibold outline-0 hover:bg-[#dbdbdb] hover:text-amber-600"
            >
              +
            </button>
          </div>

          <Button
            color={"text-slate-200"}
            backgroundColor={"bg-amber-600"}
            hover={"hover:bg-amber-500"}
            onClick={() => handleAddtoCart(product)}
          >
            add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductRow;
// dispatch({type:"addtocart", payload:product})
