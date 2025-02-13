import React from "react";
import Button from "./Button";

function Card() {
  return (
    <div className="">
      <picture>
        <source
          srcSet="/images/shared/desktop/image-xx99-mark-one-headphones.jpg"
          media="(min-width: 1024px)"
        />
        <source
          srcSet="/images/shared/tablet/image-xx99-mark-one-headphones.jpg"
          media="(min-width:640px)"
        />
        <img
          src="/images/shared/mobile/image-xx99-mark-one-headphones.jpg"
          alt=""
          className="w-full rounded-lg object-contain sm:object-cover"
        />
      </picture>
      <div className="flex flex-col items-center gap-6 p-4">
        <h4 className="text-xl font-bold tracking-wide uppercase lg:text-2xl">
          xx99 mark i
        </h4>
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

export default Card;
