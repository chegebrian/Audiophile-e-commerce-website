import React from 'react'
import Button from './Button'

function Hero() {
  return (
    <section className="bg-[#191919]  flex items-center justify-center  px-8 lg:px-30  lg:justify-start h-screen bg-[url('/images/home/mobile/image-hero.jpg')] sm:bg-[url('/images/home/tablet/image-hero.jpg')] lg:bg-[url('/images/home/desktop/image-hero.jpg')] bg-no-repeat bg-center bg-contain">
    <div className=" z-50 flex items-center justify-center lg:items-start lg:justify-start flex-col gap-4">
      <p className="text-sm tracking-[0.4em] lg:text-2xl text-slate-400 uppercase">
        new product
      </p>
      <div className="flex flex-col text-2xl lg:text-5xl lg:gap-3 font-bold tracking-[0.2em] text-white uppercase">
        <span>XX99 Mark II</span>
        <span>Headphones</span>
      </div>
      <p className="text-slate-300 text-center lg:text-start lg:w-96">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <Button
        color={"text-slate-200"}
        backgroundColor={"bg-amber-600"}
        hover={"hover:bg-amber-500"}
        to={"/products"}
      >
        see product
      </Button>
    </div>
    {/* <img src="/public/images/home/mobile/image-hero.jpg" alt="" className=" z-10 max-w-full mx-auto"/> */}
  </section>
  )
}

export default Hero