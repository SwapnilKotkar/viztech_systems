import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-[#010851]">
      <footer className="max-w-screen-2xl px-4 md:px-8 mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-4 mb-8">
            <div className="flex space-x-5">
              <svg
                width="75"
                height="75"
                viewBox="0 0 75 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="75"
                  height="75"
                  rx="10"
                  fill="url(#paint0_linear_4_341)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_4_341"
                    x1="0"
                    y1="0"
                    x2="75"
                    y2="75"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.182292" stopColor="#EE9AE5" />
                    <stop offset="1" stopColor="#2400FF" stopOpacity="0.66" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="text-white text-2xl lg:text-4xl font-bold flex items-center">
                Viztech Systems
              </p>
            </div>
            <p className="text-white text-sm lg:text-base md:w-[70%]">
              This is a section of some simple filler text, also known as
              placeholder text. It shares characteristics of real text.
            </p>
          </div>
          <div>
            <div className="flex md:space-x-10 lg:space-x-40 justify-center">
            <div className="space-y-3 flex-1 md:flex-none">
              <strong className="text-lg text-gray-200">Quick links</strong>
              <div className="flex flex-col space-y-2 text-gray-300">
                <Link href={'/'} className='hover:text-blue-500 text-sm'>Home</Link>
                <Link href={'/about'} className='hover:text-blue-500 text-sm'>About Us</Link>
                <Link href={'/careers'} className='hover:text-blue-500 text-sm'>Careers</Link>
                <Link href={'/contact'} className='hover:text-blue-500 text-sm'>Contact</Link>
              </div>
            </div>
            <div className="space-y-3 flex-1 md:flex-none">
              <strong className="text-lg text-gray-200">Addresses</strong>
              <div className="flex flex-col space-y-4 text-gray-300">
                <div>
                  <strong>India office</strong>
                  <p className="text-sm md:w-[70%]">#27 Opp to IBM Office Bannergatta road, Banglore 27</p>
                </div>
                <div>
                  <strong>UK office</strong>
                  <p className="text-sm">#33 Cleverland road, London UK DA16 3JP</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="text-gray-200 text-slg font-bold text-center pt-16">
        © Viztech Systems. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
