import React, { useState, useEffect } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import Router from "next/router";
import {
  BsFillCheckSquareFill,
  BsFillTrashFill,
  BsPersonCircle,
} from "react-icons/bs";

const AppliedCandidates = () => {
  const [resumesList, setResumesList] = useState();

  const tableHeadders = [
    "Name",
    "Applying for",
    "Notice period",
    "Comments",
    "Resume",
    "Action",
  ];

  // const handleApprove = () => {}
  const handleRemove = async(id) => {
    const res = await fetch(`/api/resumes/resumes/?resumeId=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status === 200) {
      toast.remove();
      toast.success("Candidate Deleted");
      setTimeout(() => {
        Router.push("/admin");
      }, 500);
    } else {
      toast.remove();
      toast.error("Failed to delete");
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('/api/resumes/resumes');
      const resumes = await result.json();
      setResumesList(resumes);
    };

    fetchData();
  
  }, [])
  

  return(
    <>
      <div className="pt-3 pb-10">
        <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="py-4 lg:pt-4 lg:col-span-2">
            <div className="flex justify-center">
              <a href="" className="text-2xl font-bold text-[#6C63FF]">
                Resumes
              </a>
            </div>
          </div>
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg my-4">
            <table className="w-full text-left text-gray-500">
              <thead className="text-sm md:text-lg text-white bg-[#6C63FF]">
                <tr>
                  {tableHeadders.map((item, index) => (
                    <th
                      key={index}
                      scope="col"
                      className="py-3 px-6 font-semibold border-r"
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                {resumesList?.map((resume) => (
                  <tr
                    key={resume._id}
                    className="bg-white border-b border-gray-300 hover:bg-gray-200 "
                  >
                    <th
                      scope="row"
                      className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <span>
                        <BsPersonCircle className="h-7 w-7 text-gray-500" />
                      </span>
                      <div className="pl-3">
                        <div className="text-base text-gray-600 font-semibold">
                          {resume.fullName}
                        </div>
                        <div className="font-normal text-gray-700">
                          {resume.emailID}
                        </div>
                      </div>
                    </th>
                    <td className="py-4 px-6">{resume.title}</td>
                    <td className="py-4 px-6">{resume.notice_period}</td>
                    <td className="py-4 px-6 max-w-sm">{resume.comments}</td>
                    <td className="py-4 px-6">
                      <a href={resume.resumeURL} target='_blank' rel="noreferrer">
                        <a
                          className="font-medium text-blue-500 hover:underline md:mx-1 my-1"
                          target="_blank"
                        >
                          View resume
                        </a>
                      </a>
                    </td>
                    <td className="py-4 px-6">
                      {/* <button
                        type="button"
                        onClick={() => handleApprove(resume)}
                        className="text-xl text-green-500 md:mr-3 my-1"
                      >
                        <BsFillCheckSquareFill />
                      </button> */}
                      <button
                        type="button"
                        onClick={() => handleRemove(resume._id)}
                        className="text-xl text-red-500 md:ml-3 my-1"
                      >
                        <BsFillTrashFill />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default AppliedCandidates;
