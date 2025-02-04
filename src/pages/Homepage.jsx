import React from "react";
import Hero from "../ui/Hero";
import PageNav from "../ui/PageNav";
import Button from "../ui/Button";

function Homepage() {
  return (
    <>
      <Hero />

      <section className="px-8 py-36 lg:px-30">
        <PageNav />
        <div className="mt-32 flex h-screen flex-col items-center justify-center gap-8 rounded-lg bg-amber-600 bg-[url('/images/home/desktop/pattern-circles.svg')] bg-contain bg-center bg-no-repeat px-4 lg:flex-row">
          <picture>
            <source
              srcSet="/images/home/desktop/image-speaker-zx9.png"
              media="(min-width: 1024px)"
            />
            <source
              srcSet="/images/home/tablet/image-speaker-zx9.png"
              media="(min-width:640px)"
            />

            <img
              src="/images/home/mobile/image-speaker-zx9.png"
              alt="speaker-zx9"
              className="w-40 object-contain sm:w-48 lg:w-96"
            />
          </picture>
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex flex-col items-center justify-center text-3xl font-bold tracking-widest text-white uppercase">
              <span>ZX9</span>
              <span>speaker</span>
            </div>
            <p className="text-center font-extralight text-white">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button
              color={"text-white"}
              backgroundColor={"bg-[#191919]"}
              hover={"hover:bg-[#000]"}
            >
              see product
            </Button>
          </div>
        </div>
        <div className="relative my-12">
          <div className="absolute top-[50%] flex -translate-y-[50%] flex-col items-start justify-start gap-4 pl-4">
            <span className="text-3xl font-bold tracking-wider uppercase">
              zx7 speaker
            </span>
            <Button
              color={"#191919"}
              hover={"hover:text-slate-300"}
              backgroundHover={"hover:bg-[#191919]"}
              border={"border-2"}
              borderColor={"border-[#191919]"}
            >
              see product
            </Button>
          </div>
          <picture>
            <source
              srcSet="/public/images/home/desktop/image-speaker-zx7.jpg"
              media="(min-width: 1024px)"
            />
            <source
              srcSet="/public/images/home/tablet/image-speaker-zx7.jpg"
              media="(min-width:640px)"
            />
            <img
              src="/public/images/home/mobile/image-speaker-zx7.jpg"
              alt="speaker-zx7"
              className="w-full rounded-lg object-cover"
            />
          </picture>
        </div>
        <div className="grid gap-4 max-sm:grid-rows-2 sm:grid-cols-2">
          <picture>
            <source
              srcSet="/images/home/desktop/image-earphones-yx1.jpg"
              media="(min-width: 1024px)"
            />
            <source
              srcSet="/images/home/tablet/image-earphones-yx1.jpg"
              media="(min-width:640px)"
            />
            <img
              src="/images/home/mobile/image-earphones-yx1.jpg"
              alt="earphones-yx1"
              className="w-full rounded-lg object-contain"
            />
          </picture>
          <div className="flex w-full flex-col items-center justify-center gap-4 rounded-lg bg-[#d5d5d5]">
            <span className="text-3xl font-bold tracking-wider uppercase">
              yx1 earphones
            </span>
            <Button
              color={"#191919"}
              hover={"hover:text-slate-300"}
              backgroundHover={"hover:bg-[#191919]"}
              border={"border-2"}
              borderColor={"border-[#191919]"}
            >
              see product
            </Button>
          </div>
        </div>
        <div className="mt-12 lg:grid lg:grid-cols-2 gap-4 lg:grid-rows-1">
          <picture className="lg:col-start-2 lg:col-end-3 ">
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
              className="rounded-lg w-full object-contain"
            />
          </picture>
          <div className="flex flex-col items-center lg:justify-center lg:items-start gap-8 max-lg:mt-4 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2">
            <h3 className="text-3xl font-bold uppercase ">
              Bringing you the <span className="text-amber-600">best</span>{" "}
              audio gear
            </h3>
            <p>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;
// bg-linear-to-b from-[#e1e1e1] to-[#d2d2d2]
// flex w-full flex-col items-center gap-4 sm:flex-row
