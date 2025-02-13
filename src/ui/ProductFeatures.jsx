import React from "react";

function ProductFeatures() {
  console.log("hello\nworld!");

  return (
    <section className="grid gap-20 lg:grid-cols-3 lg:gap-28 my-36">
      <div className="lg:col-span-2">
        <h2 className="mb-2 tracking-wide uppercase font-bold text-2xl md:text-3xl">features</h2>
        <p className="whitespace-pre-line text-slate-700">
          Experience unrivalled stereo sound thanks to innovative acoustic
          technology. With improved ergonomics designed for full day wearing,
          these revolutionary earphones have been finely crafted to provide you
          with the perfect fit, delivering complete comfort all day long while
          enjoying exceptional noise isolation and truly immersive sound.\n\nThe
          YX1 Wireless Earphones features customizable controls for volume,
          music, calls, and voice assistants built into both earbuds. The new
          7-hour battery life can be extended up to 28 hours with the charging
          case, giving you uninterrupted play time. Exquisite craftsmanship with
          a splash resistant design now available in an all new white and grey
          color scheme as well as the popular classic black.
        </p>
      </div>
      <div className="sm:flex sm:gap-20 md:gap-28 lg:flex-col lg:gap-6">
        <h3 className="mb-2 tracking-wide uppercase font-bold text-2xl md:text-3xl">in the box</h3>
        <ul>
          <li className="text-slate-700">
            <span className="mr-2 text-amber-600">2</span>Earphone unit
          </li>
          <li className="text-slate-700">
            <span className="mr-2 text-amber-600">6</span>Multi-size earplugs
          </li>
          <li className="text-slate-700">
            <span className="mr-2 text-amber-600">1</span>User manual
          </li>
          <li className="text-slate-700">
            <span className="mr-2 text-amber-600">1</span>USB-C charging cable
          </li>
          <li className="text-slate-700">
            <span className="mr-2 text-amber-600">1</span>Travel pouch
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ProductFeatures;
