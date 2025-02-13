import React from "react";
import Button from "./Button";

function ProductRow() {
  return (
    <div className="grid gap-4 lg:grid-cols-2 lg:gap-28">
      <picture>
        <source
          srcSet="/images/category-earphones/desktop/image-yx1-earphones.jpg"
          media="(min-width: 1024px)"
        />
        <source
          srcSet="/images/category-earphones/tablet/image-yx1-earphones.jpg"
          media="(min-width:640px)"
        />
        <img
          src="/images/category-earphones/mobile/image-yx1-earphones.jpg"
          alt="yx1-earphones"
          className="w-full rounded-lg object-contain"
        />
      </picture>
      <div className="flex flex-col items-center gap-6 lg:items-start lg:justify-center">
        <span className="text-[1rem] tracking-[0.5em] text-amber-600 uppercase lg:text-lg">
          new product
        </span>
        <div className="flex flex-col items-center lg:items-start lg:justify-center">
          <span className="text-2xl font-bold tracking-wide uppercase lg:text-3xl">
            yx1 wireless
          </span>
          <span className="text-2xl font-bold tracking-wide uppercase lg:text-3xl">
            earphones
          </span>
        </div>

        <p className="text-slate-700 max-lg:text-center">
          Tailor your listening experience with bespoke dynamic drivers from the
          new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even
          in noisy environments with its active noise cancellation feature.
        </p>

        <span>$ 599</span>


        
        <Button
          color={"text-slate-200"}
          backgroundColor={"bg-amber-600"}
          hover={"hover:bg-amber-500"}
          to={"/products"}
        >
          add to cart
        </Button>
      </div>
    </div>
  );
}

export default ProductRow;
