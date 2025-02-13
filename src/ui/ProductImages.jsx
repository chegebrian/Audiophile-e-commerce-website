import React from "react";

function ProductImages() {
  return (
    <section className="mb-36 grid gap-6 sm:grid-cols-2 sm:grid-rows-2">
      <picture className="sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-2 w-full">
        <source
          srcSet="/images/product-yx1-earphones/desktop/image-gallery-1.jpg"
          media="(min-width: 1024px)"
        />
        <source
          srcSet="/images/product-yx1-earphones/tablet/image-gallery-1.jpg"
          media="(min-width:640px)"
        />

        <img
          src="/images/product-yx1-earphones/mobile/image-gallery-1.jpg"
          alt="yx1-earphones"
          className=" rounded-lg object-contain sm:object-cover sm:h-full w-full"
        />
      </picture>
      <picture className="sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-3 w-full">
        <source
          srcSet="/images/product-yx1-earphones/desktop/image-gallery-2.jpg"
          media="(min-width: 1024px)"
        />
        <source
          srcSet="/images/product-yx1-earphones/tablet/image-gallery-2.jpg"
          media="(min-width:640px)"
        />

        <img
          src="/images/product-yx1-earphones/mobile/image-gallery-2.jpg"
          alt="yx1-earphones"
          className=" rounded-lg object-contain sm:object-cover sm:h-full w-full"
        />
      </picture>
      <picture className="sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-3 w-full">
        <source
          srcSet="/images/product-yx1-earphones/desktop/image-gallery-3.jpg"
          media="(min-width: 1024px)"
        />
        <source
          srcSet="/images/product-yx1-earphones/tablet/image-gallery-3.jpg"
          media="(min-width:640px)"
        />

        <img
          src="/images/product-yx1-earphones/mobile/image-gallery-3.jpg"
          alt="yx1-earphones"
          className=" rounded-lg object-contain sm:object-cover sm:h-full w-full"
        />
      </picture>
    </section>
  );
}

export default ProductImages;
