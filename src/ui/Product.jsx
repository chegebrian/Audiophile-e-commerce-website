import React from "react";
import { useNavigate, useParams } from "react-router";
import ProductRow from "./ProductRow";
import ProductFeatures from "./ProductFeatures";
import ProductImages from "./ProductImages";
import PageNav from "./PageNav";
import BestgearContent from "./BestgearContent";
import Card from "./Card";
import { useProducts } from "../contexts/ProductContext";

function Product() {
  const navigate = useNavigate();
  const { productsData } = useProducts();
  const params = useParams();

  const product = productsData.find((p) => p.slug === params.slug);

  return (
    <section className="bg-white">
      <div className="px-8 pb-36 lg:px-30 xl:mx-auto xl:max-w-[1280px]">
        <button
          onClick={() => navigate(-1)}
          className="my-18 cursor-pointer border-0 tracking-wide text-slate-700 uppercase outline-0 hover:underline"
        >
          go back
        </button>
        <ProductRow product={product} />
        <ProductFeatures product={product} />
        <ProductImages product={product} />
        <div className="mb-44">
          <h3 className="pb-16 text-center text-2xl font-bold uppercase lg:text-3xl">
            you may also like
          </h3>
          <ul className="flex flex-col gap-16 lg:flex-row lg:gap-4">
            {product?.others?.map((item) => (
              <li key={item.slug}>
                <Card item={item} />
              </li>
            ))}
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

{
  /* <li>
<Card />
</li>
<li>
<Card />
</li>
<li>
<Card />
</li> */
}
