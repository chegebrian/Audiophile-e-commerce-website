import React from "react";

function BestgearContent() {
  return (
    <div className="mt-28 gap-4 lg:grid lg:grid-cols-2 lg:grid-rows-1">
      <picture className="lg:col-start-2 lg:col-end-3">
        <source
          srcSet="/images/shared/desktop/image-best-gear.jpg"
          media="(min-width: 1024px)"
        />
        <source
          srcSet="/images/shared/tablet/image-best-gear.jpg"
          media="(min-width:640px)"
        />
        <img
          src="/images/shared/mobile/image-best-gear.jpg"
          alt="best-gear"
          className="w-full rounded-lg object-contain"
        />
      </picture>
      <div className="flex flex-col items-center gap-8 max-lg:mt-4 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 lg:items-start lg:justify-center">
        <h3 className="text-3xl font-bold uppercase">
          Bringing you the <span className="text-amber-600">best</span> audio
          gear
        </h3>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}

export default BestgearContent;
