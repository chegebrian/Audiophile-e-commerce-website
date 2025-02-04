import React from "react";
import Hero from "../ui/hero";
import PageNav from "../ui/PageNav";
import BestgearContent from "../ui/BestgearContent";

function Speakers() {
  return (
    <>
      <Hero>speakers</Hero>
      <section className="px-8 py-36 lg:px-30">
        <PageNav />
        <BestgearContent />
      </section>
    </>
  );
}

export default Speakers;
