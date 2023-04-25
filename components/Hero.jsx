import React from "react";
import { initialData } from "@/initialData";
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  const { hero } = initialData

  
  return (
    <div className="flex flex-col w-full">  
       {/* place of dotted illustration */}

       {/* <div className="absolute top-0 right-[-55px] w-full h-screen bg-gradient-to-bl from-cyan-500 to-black from-1% to-40%" ></div> */}
       <div className="hero-illustration" ></div>
  

      <div className="container mx-auto" >
      <section className="flex flex-col justify-center items-center gap-5 relative text-whiteloan h-[500px] ">      
      <h1 className="text-5xl font-bold ">
      {hero.title}
      </h1>
      <h1 className="text-5xl font-bold ">
      {hero.breaktitle}
      </h1>
        <p className="text-gray-500 text-center py-4 lg:w-1/2">
          {hero.content}
        </p>
        <div className="flex gap-7">
          <Link href={hero.buttons[0].url} >
          <button
            type="button"
            className="neonBtn"
          >
            {hero.buttons[0].title}
          </button>
          </Link>
          <Link href={hero.buttons[1].url} >
          <button
            type="button"
            className="baseBtn"
          >
            {hero.buttons[1].title}
            <svg
              width="7"
              height="11"
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.625 1.125L6 5.5L1.625 9.875"
                stroke="inherit"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          </Link>
        </div>
      </section>

      {/* cards container */}
      <section className="flex flex-col md:flex-row text-whiteloan ">
        <div className="flex flex-col justify-center flex-1" >
        <p className="text-blueloan" >Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <h1 className=" text-3xl md:text-[80px] my-2 md:my-8" >About us</h1>
        <p className="text-sm my-2" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button className="mt-[45px] h-[45px] w-[114px] text-sm border border-white rounded-[4px]" >More about us</button>
        </div>
        <div className=" relative flex-1 w-full justify-center items-center" >
          <img src='/earth.svg' width="100%" height="100%" className="px-6" />
        </div>
      </section>
      </div>
    </div>
  );
};

export default Hero;
