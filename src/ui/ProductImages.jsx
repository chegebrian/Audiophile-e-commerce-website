import React from "react";

function ProductImages({ product }) {
  return (
    <section className="mb-36 grid gap-6 sm:grid-cols-2 sm:grid-rows-2">
      <picture className="w-full sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-2">
        <source
          srcSet={product?.gallery?.first?.desktop}
          media="(min-width: 1024px)"
        />
        <source
          srcSet={product?.gallery?.first?.tablet}
          media="(min-width:640px)"
        />

        <img
          src={product?.gallery?.first?.mobile}
          alt={product?.slug}
          className="w-full rounded-lg object-contain sm:h-full sm:object-cover"
        />
      </picture>
      <picture className="w-full sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-3">
        <source
          srcSet={product?.gallery?.second?.desktop}
          media="(min-width: 1024px)"
        />
        <source
          srcSet={product?.gallery?.second?.tablet}
          media="(min-width:640px)"
        />

        <img
          src={product?.gallery?.second?.mobile}
          alt={product?.slug}
          className="w-full rounded-lg object-contain sm:h-full sm:object-cover"
        />
      </picture>
      <picture className="w-full sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-3">
        <source
          srcSet={product?.gallery?.third?.desktop}
          media="(min-width: 1024px)"
        />
        <source
          srcSet={product?.gallery?.third?.tablet}
          media="(min-width:640px)"
        />

        <img
          src={product?.gallery?.third?.mobile}
          alt={product?.slug}
          className="w-full rounded-lg object-contain sm:h-full sm:object-cover"
        />
      </picture>
    </section>
  );
}

export default ProductImages;
