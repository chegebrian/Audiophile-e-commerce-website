import React from "react";
import Hero from "../ui/Hero";
import PageNav from "../ui/PageNav";
import Button from "../ui/Button";

function Homepage() {
  return (
    <>
      <Hero />
      {/* <img src="/public/images/home/mobile/image-speaker-zx9.png" alt="" /> */}
      <section className="px-4 py-36 lg:px-30">
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
      </section>
    </>
  );
}

export default Homepage;
