import React from "react";
import { useNavigate } from "react-router";
import ProductRow from "./ProductRow";
import ProductFeatures from "./ProductFeatures";
import ProductImages from "./ProductImages";
import PageNav from "./PageNav";
import BestgearContent from "./BestgearContent";
import Card from "./Card";

function Product() {
  const navigate = useNavigate();
  return (
    <section className="bg-white">
      <div className="px-8 pb-36 lg:px-30 xl:mx-auto xl:max-w-[1280px]">
        <button
          onClick={() => navigate(-1)}
          className="my-18 cursor-pointer border-0 tracking-wide text-slate-700 uppercase outline-0 hover:underline"
        >
          go back
        </button>
        <ProductRow />
        <ProductFeatures />
        <ProductImages />
        <div className="mb-44">
          <h3 className="pb-16 text-center text-2xl font-bold uppercase lg:text-3xl">
            you may also like
          </h3>
          <ul className="flex items-center lg:gap-4 gap-16 flex-col lg:flex-row">
            <li>
              <Card />
            </li>
            <li>
              <Card />
            </li>
            <li>
              <Card />
            </li>
          </ul>
        </div>
        <section>
          <PageNav />
          <BestgearContent />
        </section>
      </div>
    </section>
  );
}

export default Product;
