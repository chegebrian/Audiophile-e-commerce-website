import React from "react";
import Hero from "../ui/hero";
import PageNav from "../ui/PageNav";
import BestgearContent from "../ui/BestgearContent";
import Row from "../ui/Row";
import { useProducts } from "../contexts/ProductContext";

function Earphones() {
  const { productsData } = useProducts();

  const product = productsData[0];
  return (
    <>
      <Hero>earphones</Hero>
      <section className="bg-slate-100">
        <section className="flex flex-col gap-28 px-8 pt-20 pb-36 lg:px-30 xl:mx-auto xl:max-w-[1280px]">
          <Row product={product} />
        </section>
        <section className="px-8 pb-36 lg:px-30 xl:mx-auto xl:max-w-[1280px]">
          <PageNav />
          <BestgearContent />
        </section>
      </section>
    </>
  );
}

export default Earphones;
