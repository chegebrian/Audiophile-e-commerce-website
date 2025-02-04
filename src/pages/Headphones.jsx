import React from "react";
import Hero from "../ui/hero";
import BestgearContent from "../ui/BestgearContent";
import PageNav from "../ui/PageNav";

function Headphones() {
  return (
    <>
      <Hero>headphones</Hero>
      <section className="py-36 px-8 lg:px-30">
        <PageNav />
        <BestgearContent />
      </section>
    </>
  );
}

export default Headphones;
