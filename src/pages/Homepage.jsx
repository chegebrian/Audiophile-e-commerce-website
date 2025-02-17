import React from "react";
import PageNav from "../ui/PageNav";
import Button from "../ui/Button";
import BestgearContent from "../ui/BestgearContent";

function Homepage() {
  return (
    <>
      <section className="flex h-screen items-center justify-center bg-[#191919] bg-[url('/images/home/mobile/image-hero.jpg')] bg-contain bg-center bg-no-repeat px-8 sm:bg-[url('/images/home/tablet/image-hero.jpg')] lg:justify-start lg:bg-[url('/images/home/desktop/image-hero.jpg')] lg:px-30 xl:mx-auto xl:max-w-[1280px]">
        <div className="z-50 flex flex-col items-center justify-center gap-4 lg:items-start lg:justify-start">
          <p className="text-sm tracking-[0.4em] text-slate-400 uppercase lg:text-2xl">
            new product
          </p>
          <div className="flex flex-col text-2xl font-bold tracking-[0.2em] text-white uppercase lg:gap-3 lg:text-5xl">
            <span>XX99 Mark II</span>
            <span>Headphones</span>
          </div>
          <p className="text-center text-slate-300 lg:w-96 lg:text-start">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button
            color={"text-slate-200"}
            backgroundColor={"bg-amber-600"}
            hover={"hover:bg-amber-500"}
            to={"/xx99-mark-two-headphones"}
          >
            see product
          </Button>
        </div>
      </section>
      <section className="bg-slate-100">
        <section className="px-8 py-36 lg:px-30 xl:mx-auto xl:max-w-[1280px]">
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
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Button
                color={"text-white"}
                backgroundColor={"bg-[#191919]"}
                hover={"hover:bg-[#000]"}
                to={"/zx9-speaker"}
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
                to={"/zx7-speaker"}
              >
                see product
              </Button>
            </div>
            <picture>
              <source
                srcSet="/images/home/desktop/image-speaker-zx7.jpg"
                media="(min-width: 1024px)"
              />
              <source
                srcSet="/images/home/tablet/image-speaker-zx7.jpg"
                media="(min-width:640px)"
              />
              <img
                src="/images/home/mobile/image-speaker-zx7.jpg"
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
                to={"/yx1-earphones"}
              >
                see product
              </Button>
            </div>
          </div>
          <BestgearContent />
        </section>
      </section>
    </>
  );
}

export default Homepage;
// bg-linear-to-b from-[#e1e1e1] to-[#d2d2d2]
// flex w-full flex-col items-center gap-4 sm:flex-row
