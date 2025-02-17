import React from "react";
import Hero from "../ui/hero";
import BestgearContent from "../ui/BestgearContent";
import PageNav from "../ui/PageNav";
import ReverseRow from "../ui/ReverseRow";
import Row from "../ui/Row";
import { useProducts } from "../contexts/ProductContext";

function Headphones() {
  const { productsData } = useProducts();
  return (
    <>
      <Hero>headphones</Hero>
      <section className="bg-slate-100">
        <section className="flex flex-col gap-28 px-8 pt-20 pb-36 lg:px-30 xl:mx-auto xl:max-w-[1280px]">
          <Row product={productsData[3]} />
          <ReverseRow product={productsData[1]} />
          <Row product={productsData[2]} />
        </section>
        <section className="px-8 pb-36 lg:px-30 xl:mx-auto xl:max-w-[1280px]">
          <PageNav />
          <BestgearContent />
        </section>
      </section>
    </>
  );
}

export default Headphones;
