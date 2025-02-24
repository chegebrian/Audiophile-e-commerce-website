import React from "react";
import { useNavigate } from "react-router";

function Checkout() {
  const navigate = useNavigate();
  return (
    <>
      <section className="bg-slate-100">
        <section className="px-8 pb-36 lg:px-30 xl:mx-auto xl:max-w-[1280px]">
          <button
            onClick={() => navigate(-1)}
            className="my-18 cursor-pointer border-0 tracking-wide text-slate-700 uppercase outline-0 hover:underline"
          >
            go back
          </button>

          <form className="rounded-lg bg-white p-10">
            <h2 className="mb-8 text-2xl font-semibold uppercase">checkout</h2>
            <div className="flex flex-col gap-4">
              <h3 className="text-md font-semibold tracking-wide text-amber-600 uppercase">
                billing details
              </h3>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-bold text-[#191919] capitalize"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="rounded-md border border-slate-300 px-4 py-3 outline-amber-600"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold text-[#191919] capitalize"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="rounded-md border border-slate-300 px-4 py-3 outline-amber-600"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="number"
                  className="text-sm font-bold text-[#191919] capitalize"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="number"
                  className="rounded-md border border-slate-300 px-4 py-3 outline-amber-600"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-md mt-8 font-semibold tracking-wide text-amber-600 uppercase">
                shipping info
              </h3>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="address"
                  className="text-sm font-bold text-[#191919] capitalize"
                >
                  your address
                </label>
                <input
                  type="text"
                  id="address"
                  className="rounded-md border border-slate-300 px-4 py-3 outline-amber-600"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="zip-code"
                    className="text-sm font-bold text-[#191919] capitalize"
                  >
                    zip code
                  </label>
                  <input
                    type="number"
                    id="zip-code"
                    className="rounded-md border border-slate-300 px-4 py-3 outline-amber-600"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="city"
                    className="text-sm font-bold text-[#191919] capitalize"
                  >
                    city
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="rounded-md border border-slate-300 px-4 py-3 outline-amber-600"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="country"
                  className="text-sm font-bold text-[#191919] capitalize"
                >
                  country
                </label>
                <input
                  type="text"
                  id="country"
                  className="rounded-md border border-slate-300 px-4 py-3 outline-amber-600"
                />
              </div>
            </div>
            <div>
              <h3 className="text-md mt-8 font-semibold tracking-wide text-amber-600 uppercase">
                payment details
              </h3>
              <div>
                <label
                  htmlFor="payment-method"
                  className="text-sm font-bold text-[#191919] capitalize"
                >
                  payment method
                </label>
                <div className="">
                  <div className="rounded-md border border-slate-300 px-4 py-3 outline-amber-600">
                    <input type="radio" name="payment-method" id="e-money" />
                    <label
                      htmlFor="e-money"
                      className="text-sm font-bold text-[#191919] capitalize ml-4"
                    >
                      e-Money
                    </label>
                  </div>
                  <div className="rounded-md border border-slate-300 px-4 py-3 outline-amber-600">
                    <input
                      type="radio"
                      name="payment-method"
                      id="cash-on-delivery"
                    />
                    <label
                      htmlFor="cash-on-delivery"
                      className="text-sm font-bold text-[#191919] capitalize ml-4"
                    >
                      cash on delivery
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </section>
    </>
  );
}

export default Checkout;
