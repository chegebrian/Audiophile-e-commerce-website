import React from "react";

function ProductFeatures({ product }) {
  return (
    <section className="my-36 grid gap-20 lg:grid-cols-3 lg:gap-28">
      <div className="lg:col-span-2">
        <h2 className="mb-2 text-2xl font-bold tracking-wide uppercase md:text-3xl">
          features
        </h2>
        <p className="whitespace-pre-line text-slate-700">
          {product?.features}
        </p>
      </div>
      <div className="sm:flex sm:gap-20 md:gap-28 lg:flex-col lg:gap-6">
        <h3 className="mb-2 text-2xl font-bold tracking-wide uppercase md:text-3xl">
          in the box
        </h3>
        <ul>
          <li className="text-slate-700">
            <span className="mr-2 text-amber-600">2</span>Earphone unit
          </li>
          <li className="text-slate-700">
            <span className="mr-2 text-amber-600">6</span>Multi-size earplugs
          </li>
          <li className="text-slate-700">
            <span className="mr-2 text-amber-600">1</span>User manual
          </li>
          <li className="text-slate-700">
            <span className="mr-2 text-amber-600">1</span>USB-C charging cable
          </li>
          <li className="text-slate-700">
            <span className="mr-2 text-amber-600">1</span>Travel pouch
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ProductFeatures;
