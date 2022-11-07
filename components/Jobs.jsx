import React, { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import toast from "react-hot-toast";

import {
  BiCurrentLocation,
  BiRupee,
  BiTime,
  BiBriefcaseAlt2,
  BiUser,
} from "react-icons/bi";

const Jobs = ({ jobsData }) => {
  const [jobs, setJobs] = useState(jobsData);

  const truncate = (str, n) => {
    return str?.length > n ? str.slice(0, n) : str;
  };

  const handleDelete = async (id) => {
    toast.loading("job deleting...");

    const res = await fetch(`/api/jobs/?jobId=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status === 200) {
      toast.remove();
      toast.success("Job deleted");
      window.location.reload("/admin");
    } else {
      toast.remove();
      toast.error("Failed to delete job");
    }
  };

  return (
    <>
      <div className="my-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {jobs?.map((job, index) => (
          <div
            key={index}
            className="px-5 py-7 space-y-5 bg-white border border-gray-300 rounded-lg"
          >
            <p className="text-gray-900 font-bold text-lg md:text-xl lg:text-2xl">
              {job.title}
            </p>
            <div className="inline-grid grid-cols-2 md:grid-cols-4">
              <div className="flex items-center space-x-1">
                <BiCurrentLocation size={20} className="text-gray-800" />
                <p className="text-gray-800 text-base font-semibold">
                  {job.location}
                </p>
              </div>
              <div className="flex items-center">
                <BiRupee size={20} className="text-gray-800" />
                <p className="text-gray-800 text-base font-semibold">
                  {job.salary}
                </p>
              </div>
              <div className="flex items-center space-x-1">
                <BiUser size={20} className="text-gray-800" />
                <p className="text-gray-800 text-base font-semibold">
                  {job.vacancies}
                </p>
              </div>
              <div className="flex items-center space-x-1">
                <BiBriefcaseAlt2 size={20} className="text-gray-800" />
                <p className="text-gray-800 text-base font-semibold">
                  {job.experience} experience
                </p>
              </div>
            </div>
            <p className="text-gray-600">
              {truncate(job.description, 120)}{" "}
              <span className="font-bold">...</span>
            </p>
            <div className="flex justify-end">
              <div className="space-x-2">
                <button
                  className="border-2 border-[#6C63FF] text-[#6C63FF] rounded-[100px] py-2 px-8"
                  onClick={() => handleDelete(job._id)}
                >
                  Delete
                </button>
                <Link href={`editjob/${job._id}`}>
                  <button className="border-2 bg-[#6C63FF] text-white rounded-[100px] py-2 px-11">
                    Edit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Jobs;
