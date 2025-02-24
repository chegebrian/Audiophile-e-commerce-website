import React from "react";
import Button from "./Button";

function Card({ item }) {
  console.log(item);
  
  return (
    <div className="">
      <picture>
        <source srcSet={item.image.desktop} media="(min-width: 1024px)" />
        {/* <source srcSet={item.image.tablet} media="(min-width:640px)" /> */}
        <img
          src={item.image.mobile}
          alt={item.slug}
          className="w-full rounded-lg object-contain sm:object-cover"
        />
      </picture>
      <div className="flex flex-col items-center gap-6 p-4">
        <h4 className="text-xl font-bold tracking-wide uppercase lg:text-2xl">
          {item.name}
        </h4>
        <Button
          color={"text-slate-200"}
          backgroundColor={"bg-amber-600"}
          hover={"hover:bg-amber-500"}
          to={`/${item.slug}`}
        >
          see product
        </Button>
      </div>
    </div>
  );
}

export default Card;
