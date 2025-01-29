import React from "react";
import Navbar from "./Navbar";

function Footer() {
  return (
    <footer className="bg-black py-6">
      <Navbar />
      <p className="mt-6 text-center text-slate-300 sm:text-start lg:w-[50%]">
        {" "}
        Audiophile is an all in one stop to fulfill your audio needs. We&apos;re
        a small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div className="flex flex-col items-center mt-6 gap-6 sm:flex-row sm:justify-between">
        <p className=" text-slate-300">
          Copyright 2021. All Rights Reserved
        </p>
        <div className="flex items-center justify-center gap-4">
          <img
            src="/images/shared/desktop/icon-facebook.svg"
            alt="facebook logo"
          />
          <img
            src="/images/shared/desktop/icon-twitter.svg"
            alt="twitter logo"
          />
          <img
            src="/images/shared/desktop/icon-instagram.svg"
            alt="instagram logo"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
