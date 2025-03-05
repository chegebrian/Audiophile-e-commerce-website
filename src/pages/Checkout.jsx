import React, { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../ui/Button";

function Checkout() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("option-1");

  function handleSelectedOption(e) {
    setSelectedOption(e.target.value);
  }
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
          <section className="flex flex-col gap-6 lg:flex-row">
            <form className="rounded-lg bg-white p-10 lg:grow-2">
              <h2 className="mb-8 text-2xl font-semibold uppercase">
                checkout
              </h2>
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
                <h3 className="text-md mt-8 mb-4 font-semibold tracking-wide text-amber-600 uppercase">
                  payment details
                </h3>
                <div>
                  <h4 className="mb-4 text-sm font-bold text-[#191919] capitalize">
                    payment method
                  </h4>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label
                      htmlFor="e-money"
                      className="flex items-center gap-4 rounded-md border border-slate-300 px-4 py-3 text-sm font-bold text-[#191919] capitalize outline-amber-600"
                    >
                      <input
                        type="radio"
                        name="payment-method"
                        id="e-money"
                        value="option-1"
                        checked={selectedOption === "option-1"}
                        onClick={handleSelectedOption}
                      />
                      <span>e-Money</span>
                    </label>

                    <label
                      htmlFor="cash-on-delivery"
                      className="flex items-center gap-4 rounded-md border border-slate-300 px-4 py-3 text-sm font-bold text-[#191919] capitalize"
                    >
                      <input
                        type="radio"
                        name="payment-method"
                        id="cash-on-delivery"
                        value="option-2"
                        checked={selectedOption === "option-2"}
                        onClick={handleSelectedOption}
                      />
                      <span>cash on delivery</span>
                    </label>
                  </div>
                  {selectedOption === "option-1" && (
                    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="e-money-number"
                          className="text-sm font-bold text-[#191919] capitalize"
                        >
                          e-money number
                        </label>
                        <input
                          type="number"
                          id="e-money-number"
                          className="rounded-md border border-slate-300 px-4 py-3 outline-amber-600"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="e-money-pin"
                          className="text-sm font-bold text-[#191919] capitalize"
                        >
                          e-money pin
                        </label>
                        <input
                          type="number"
                          id="e-money-pin"
                          className="rounded-md border border-slate-300 px-4 py-3 outline-amber-600"
                        />
                      </div>
                    </div>
                  )}
                  {selectedOption === "option-2" && (
                    <div className="mt-6 flex items-center gap-4 text-slate-700">
                      <img
                        src="/images/checkout/icon-cash-on-delivery.svg"
                        alt="icon-cash-on-delivery"
                      />
                      <p className="lg:max-w-[380px] xl:max-w-[500px]">
                        The ‘Cash on Delivery’ option enables you to pay in cash
                        when our delivery courier arrives at your residence.
                        Just make sure your address is correct so that your
                        order will not be cancelled.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </form>

            <section className="rounded-lg bg-white p-10 lg:grow-1">
              <h2 className="text-2xl font-semibold uppercase">summary</h2>
              <div className="my-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src="/images/cart/image-yx1-earphones.jpg"
                      alt=""
                      className="w-16 rounded-lg"
                    />
                    <div className="flex flex-col items-start gap-1">
                      <span>yx1</span>
                      <span className="font-semibold text-slate-800">
                        $ 599
                      </span>
                    </div>
                  </div>

                  <span className="font-semibold text-slate-800">x 1</span>
                </div>
              </div>
              <div className="mb-8 flex  gap-4 flex-col">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700 uppercase">total</span>
                  <span className="font-semibold">$ 100</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700 uppercase">shipping</span>
                  <span className="font-semibold">$ 100</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700 uppercase">
                    vat (included)
                  </span>
                  <span className="font-semibold">$ 100</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700 uppercase">grand total</span>
                  <span className="text-amber-600 font-semibold">$ 100</span>
                </div>
              </div>
              <button className="w-full cursor-pointer bg-amber-600 px-5 py-2 font-semibold tracking-wider text-slate-50 uppercase hover:bg-amber-500">
                continue & pay
              </button>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}

export default Checkout;
