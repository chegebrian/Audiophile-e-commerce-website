import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router";

function Applayout() {
  return (
    <div className="bg-[#191919] transition duration-100">
      <div className="w-full">
        <Header />
      </div>

      <main className="w-full">
        <Outlet />
      </main>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Applayout;

// px-10 lg:px-30
// xl:mx-auto xl:max-w-[1280px]
