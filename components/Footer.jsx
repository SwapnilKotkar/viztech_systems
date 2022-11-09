import React from "react";
import Link from "next/link";
import FooterLogo from "./FooterLogo";
const Footer = () => {
  return (
    <div className="bg-[#010851]">
      <footer className="max-w-screen-2xl px-4 md:px-8 mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-4 mb-8">
            <div className="flex space-x-5">
              <span className="rounded">
                <FooterLogo bgColor={"#fff"} color={"#3E1FFF"} width={150} />
              </span>
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
                  <Link href={"/"} className="hover:text-blue-500 text-sm">
                    Home
                  </Link>
                  <Link href={"/about"} className="hover:text-blue-500 text-sm">
                    About Us
                  </Link>
                  <Link
                    href={"/careers"}
                    className="hover:text-blue-500 text-sm"
                  >
                    Careers
                  </Link>
                  <Link
                    href={"/contact"}
                    className="hover:text-blue-500 text-sm"
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div className="space-y-3 flex-1 md:flex-none">
                <strong className="text-lg text-gray-200">Addresses</strong>
                <div className="flex flex-col space-y-4 text-gray-300">
                  <div>
                    <strong>India office</strong>
                    <p className="text-sm md:w-[70%]">
                      #27 Opp to IBM Office Bannergatta road, Banglore 27
                    </p>
                  </div>
                  <div>
                    <strong>UK office</strong>
                    <p className="text-sm">
                      #33 Cleverland road, London UK DA16 3JP
                    </p>
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
