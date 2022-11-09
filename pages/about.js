import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="max-w-screen-2xl px-4 mb-20 md:px-8 mx-auto space-y-10 lg:space-y-36">
        <div className="bg-banner py-5 lg:py-10 flex justify-center rounded-xl rounded-bl-[100px] rounded-tr-[100px]">
          <p className="text-white font-bold text-xl lg:text-4xl">
            Welcome to <span className="text-[#2400FF]">Viztech Systems</span>
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-40">
          <div className="flex-1 flex justify-center">
            <div class="h-64 md:h-auto overflow-hidden flex justify-center border border-gray-300 rounded-2xl">
              <Image
                src="/team.svg"
                alt="Photo by Martin Sanchez"
                priority
                height={600}
                width={600}
              />
            </div>
          </div>

          <div className="flex-1 space-y-4 flex flex-col mt-10 lg:mt-0">
            <h1 className="text-gray-800 text-2xl sm:text-3xl lg:text-4xl font-bold md:text-left lg:leading-normal">
              You Make The Hire.{" "}
              <span className="text-[#9A7AF1]">We Make It Simple.</span>
            </h1>
            <p className="text-base lg:text-xl text-gray-600 lg:leading-loose">
              Using the process and bespoke-Al hiring we employ the best
              prudence practice in getting the right resources for the job.
              Analogically one can relate as we are technologists hiring
              technologists so we know what it takes for one to be in that role.
              Also not only help you reduce frustration but our process makes
              sure you do not end up costly of the wrong hire. It is expensive
              and bad for all parties involved. Hiring someone as if you hire
              for a lifetime. Though we have time-bound roles and projects, one
              should be hired to work again and again if required.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row lg:space-x-40">
          <div className="flex-1 space-y-4 flex flex-col mt-10 lg:mt-0">
            <h1 className="text-gray-800 text-2xl sm:text-3xl lg:text-4xl font-bold md:text-left lg:leading-normal">
              We Build Lasting Relationships Between{" "}
              <span className="text-[#9A7AF1]">Candidates & Business.</span>
            </h1>
            <p className="text-base lg:text-xl text-gray-600 lg:leading-loose">
              A descriptive paragraph that tells clients how good you are and
              proves that you are the best choice that they have made. This
              paragraph is also for those who are looking out for a reliable
              co-working space. You can use a few enticing words and flaunt your
              capabilities that will attract future clients and encourage them
              to hire you right away. List down your expertise and experience to
              prove you are the best.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="h-64 md:h-auto overflow-hidden flex justify-center border border-gray-300 rounded-2xl">
              <Image
                src="/meeting.svg"
                alt="Photo by Martin Sanchez"
                priority
                height={600}
                width={700}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-banner flex py-10 lg:py-14">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto flex space-x-10">
          <p className="flex items-center text-white font-bold text-xl lg:text-3xl">
            Professional Team.
          </p>
          <div>
            <Link href={"/contact"}>
              <button className="px-7 lg:px-10 py-3 lg:py-4 text-black text-sm lg:text-base font-semibold bg-white hover:bg-[#4e38cc] rounded-md">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
