import React from "react";

function Hero({ children }) {
  return (
    <section className="flex items-center justify-center bg-[#191919] px-8 lg:px-30">
      <p className="text-2xl font-bold tracking-wide text-white uppercase sm:text-3xl">
        {children}
      </p>
    </section>
  );
}

export default Hero;
