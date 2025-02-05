import React from "react";

function Hero({ children }) {
  return (
    <section className="flex h-24 items-center justify-center bg-[#191919] px-8 sm:h-64 lg:h-60 lg:px-30">
      <p className="text-2xl font-bold tracking-wide text-white uppercase sm:text-3xl">
        {children}
      </p>
    </section>
  );
}

export default Hero;
