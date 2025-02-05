import React from "react";
import Hero from "../ui/hero";
import BestgearContent from "../ui/BestgearContent";
import PageNav from "../ui/PageNav";
import ReverseRow from "../ui/ReverseRow";
import Row from "../ui/Row";

function Headphones() {
  return (
    <>
      <Hero>headphones</Hero>
      <section className="px-8 pt-20 pb-36 lg:px-30 flex flex-col gap-28">
        <Row />
        <ReverseRow />
        <Row />
      </section>
      <section className="px-8 lg:px-30 pb-36">
        <PageNav />
        <BestgearContent />
      </section>
    </>
  );
}

export default Headphones;
