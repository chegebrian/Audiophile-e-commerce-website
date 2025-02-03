import React from 'react'
import Button from './Button'

function Hero() {
  return (
    <section className="bg-black flex items-center justify-center h-screen bg-[url('/images/home/mobile/image-hero.jpg')] bg-no-repeat bg-center bg-contain">
    <div className=" z-50 flex items-center justify-center flex-col gap-4">
      <p className="text-sm tracking-[0.4em] text-slate-400 uppercase">
        new product
      </p>
      <div className="flex flex-col text-2xl font-bold tracking-[0.2em] text-white uppercase">
        <span>XX99 Mark II</span>
        <span>Headphones</span>
      </div>
      <p className="text-slate-300 text-center">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <Button
        color={"text-slate-200"}
        backgroundColor={"bg-amber-600"}
        hover={"bg-amber-500"}
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