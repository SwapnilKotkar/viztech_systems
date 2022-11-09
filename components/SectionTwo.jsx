import React from "react";
import Link from "next/link";

const SectionTwo = () => {
  return (
    <div className="max-w-screen-2xl px-4 my-24 md:px-8 mx-auto space-y-10 lg:space-y-36">
      <div className="flex flex-col lg:flex-row lg:space-x-40">
        <div>
          <div className="h-64 md:h-auto overflow-hidden flex justify-center ">
            <img
              src="/software.svg"
              loading="lazy"
              alt="Photo by Martin Sanchez"
              className="w-2/3 lg:w-full"
            />
          </div>
        </div>

        <div className="space-y-4 flex flex-col justify-center mt-10">
          <h1 className="text-gray-800 text-2xl sm:text-3xl lg:text-4xl font-bold md:text-left lg:leading-normal">
            We have been improving our product{" "}
            <span className="text-[#9A7AF1]">for many years.</span>
          </h1>
          <p className="text-base lg:text-xl text-gray-600">
            This is a section of some simple filler text, also known as
            placeholder text. It shares characteristics of real text.
          </p>
          <div>
          <Link href={'/about'}>
          <button className="px-7 lg:px-10 py-3 lg:py-4 text-sm lg:text-base font-semibold text-white bg-[#6B54F5] hover:bg-[#4e38cc] rounded-md">
              About Us
            </button>
          </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row lg:space-x-40">
        <div className="space-y-4 flex flex-col justify-center mt-10">
          <h1 className="text-gray-800 text-2xl sm:text-3xl lg:text-4xl font-bold md:text-left lg:leading-normal">
          We Build Lasting Relationships Between <span className="text-[#9A7AF1]">Candidates & Business.</span>
          </h1>
          <p className="text-base lg:text-xl text-gray-600">
            This is a section of some simple filler text, also known as
            placeholder text. It shares characteristics of real text.
          </p>
          <div>
          <Link href={'/contact'}>
          <button className="px-7 lg:px-10 py-3 lg:py-4 text-sm lg:text-base font-semibold text-white bg-[#6B54F5] hover:bg-[#4e38cc] rounded-md">
              Contact Us
            </button>
            </Link>
          </div>
        </div>
        <div>
          <div className="h-64 md:h-auto overflow-hidden flex justify-center">
            <img
              src="/development.svg"
              loading="lazy"
              alt="Photo by Martin Sanchez"
              className="w-2/3 lg:w-full"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default SectionTwo;
