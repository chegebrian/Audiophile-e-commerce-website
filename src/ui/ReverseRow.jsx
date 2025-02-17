import React from "react";
import Button from "./Button";

function ReverseRow({ product }) {
  return (
    <div className="grid gap-4 lg:grid-cols-2 lg:grid-rows-1 lg:gap-28">
      <picture className="lg:col-start-2 lg:col-end-3">
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
          alt={product?.name}
          className="w-full rounded-lg object-contain"
        />
      </picture>
      <div className="flex flex-col items-center gap-6 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 lg:items-start lg:justify-center">
        <span className="text-[1rem] tracking-[0.5em] text-amber-600 uppercase lg:text-lg">
          {product?.new ? "new product" : ""}
        </span>
        <h2 className="max-w-72 text-center text-2xl font-bold tracking-wide uppercase lg:text-start lg:text-3xl">
          {product?.name}
        </h2>

        <p className="text-slate-700 max-lg:text-center">
          {product?.description}
        </p>
        <Button
          color={"text-slate-200"}
          backgroundColor={"bg-amber-600"}
          hover={"hover:bg-amber-500"}
          to={"/products"}
        >
          see product
        </Button>
      </div>
    </div>
  );
}

export default ReverseRow;
