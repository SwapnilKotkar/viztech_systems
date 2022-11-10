import React, { useEffect } from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { getJobs } from "../actions/jobs";
import { useSelector, useDispatch } from "react-redux";

const Careers = () => {
  const jobs = useSelector((state) => state.jobsReducer);
  const dispatch = useDispatch();

  const truncate = (str, n) => {
    return str?.length > n ? str.slice(0, n) : str;
  };

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  return (
    <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div className="bg-banner py-5 lg:py-10 flex justify-center rounded-xl rounded-bl-[100px] rounded-tr-[100px]">
        <p className="text-white font-bold text-xl lg:text-4xl">Careers</p>
      </div>

      <div className="my-10 space-y-2">
        <div>
          <button className="border-2 border-gray-900 rounded-[100px] py-2 px-3 font-semibold">
            We&#39;re hiring
          </button>
        </div>
        <p className="text-color text-5xl lg:text-7xl font-bold">
          Be part of our mission
        </p>
        <p className="text-gray-700 text-base md:text-lg lg:w-[60%]">
          We&#39;re looking for passionate people to join us on our mission. We
          value flat heirarchies, clear communication, and full ownership and
          responsibility.
        </p>
      </div>

      {!jobs.length ? (
        <div className=" flex justify-center p-4">
          <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        jobs?.map((job, index) => (
          <div key={index} className="my-4">
            <div className=" flex flex-col md:flex-row space-y-2 md:p-6 py-6 border-t-2 border-gray-400">
              <div className="space-y-3 md:w-[80%]">
                <p className="text-2xl font-semibold">{job.title}</p>
                <p className="text-gray-800">
                  {truncate(job.description, 200)}{" "}
                  <span className="font-bold">...</span>{" "}
                </p>
                <div className="space-x-2">
                  <div className="inline-block border-2 border-gray-900 rounded-[100px] py-2 px-3 text-sm">
                    {job.location}
                  </div>
                  <div className="inline-block border-2 border-gray-900 rounded-[100px] py-2 px-3 text-sm">
                    {job.experience} yrs experience{" "}
                  </div>
                </div>
                <div><h1 className="italic text-gray-700">Posted on: {job.posted_on}</h1></div>
              </div>
              <div className="md:w-[20%] flex justify-end items-start">
                <Link href={`/job/${job._id}`}>
                  <div className="flex space-x-1 hover:text-gray-700 cursor-pointer">
                    <p className="font-semibold text-2xl md:text-3xl lg:text-4xl">
                      View
                    </p>
                    <FiArrowUpRight className="text-4xl md:text-5xl" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Careers;
