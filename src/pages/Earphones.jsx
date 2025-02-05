import React from "react";
import Hero from "../ui/hero";
import PageNav from "../ui/PageNav";
import BestgearContent from "../ui/BestgearContent";
import Row from "../ui/Row";


function Earphones() {
  return (
    <>
      <Hero>earphones</Hero>
      <section className="flex flex-col gap-28 px-8 pt-20 pb-36 lg:px-30">
        <Row />
      </section>
      <section className="px-8 pb-36 lg:px-30">
        <PageNav />
        <BestgearContent />
      </section>
    </>
  );
}

export default Earphones;
