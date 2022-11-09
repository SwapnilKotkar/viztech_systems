import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="bg-color h-[23rem] md:h-[30rem] lg:h-[40rem] w-full flex flex-col justify-center rounded-[1rem] lg:rounded-[3rem] rounded-br-[8rem] lg:rounded-br-[19rem] px-[2rem] lg:px-[3rem]">
          <strong className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            A Place That Helps You To Reach Your Destiny
          </strong>
          <p className="sm:w-[60%] my-[1rem] lg:my-[2rem] text-white text-base lg:text-xl">
            This is a section of some simple filler text, also known as
            placeholder text. It shares characteristics of real text.
          </p>
          <div>
            <Link href={'/about'}>
            <button className="px-7 lg:px-10 py-3 lg:py-4 text-sm lg:text-base font-semibold text-white bg-[#6B54F5] hover:bg-[#4e38cc] rounded-md">
              Know more
            </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
