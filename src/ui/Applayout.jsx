import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router";

function Applayout() {
  return (
    <div className="bg-[#191919]">
      <div className="px-4 lg:px-30">
        <Header />
      </div>

      <main className="bg-white">
        <Outlet />
      </main>
      <div className="px-4 lg:px-30">
        <Footer />
      </div>
    </div>
  );
}

export default Applayout;

// px-10 lg:px-30
