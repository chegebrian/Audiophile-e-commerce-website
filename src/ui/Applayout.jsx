import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router";

function Applayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Applayout;
