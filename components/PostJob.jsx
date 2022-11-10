import React, { useState, useEffect } from "react";
import { createJob, updateJob } from "../actions/jobs";
import { useSelector, useDispatch } from "react-redux";
import { BiPlus } from "react-icons/bi";

const PostJob = ({ show, setShow, currentId, setCurrentId }) => {
  const job = useSelector((state) =>
    currentId ? state.jobsReducer.find((j) => j._id == currentId) : null
  );
  const dispatch = useDispatch();

  const date = new Date().toUTCString().slice(5, 16);

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    salary: "",
    experience: "",
    vacancies: "",
    posted_on: date,
    skills: "",
    description: "",
  });

  const handleClick = () => {
    setShow((prev) => !prev);
    clear();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateJob(currentId, formData));
    } else {
      dispatch(createJob(formData));
    }

    clear();

    setShow(false);
  };

  const clear = () => {
    setCurrentId(null);
    setFormData({
      title: "",
      location: "",
      salary: "",
      experience: "",
      posted_on: date,
      vacancies: "",
      skills: "",
      description: "",
    });
  };

  useEffect(() => {
    if (job) setFormData(job);
  }, [job]);

  return (
    <>
      <div className="w-full flex justify-end items-center mb-4">
        <button
          className="border-2 bg-[#6C63FF] text-white rounded-[100px] py-3 px-7 flex items-center space-x-1"
          onClick={handleClick}
        >
          <BiPlus className="text-white" size={20} />
          <h1>Add new job</h1>
        </button>
      </div>
      <div className={`${show ? "block" : "hidden"} lg:flex-1 my-5 lg:my-0`}>
        <div className=" py-6 px-3 bg-white rounded-md">
          <form className="space-y-8" method="POST" onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-6">
              <input
                type="text"
                placeholder="Job title"
                className="p-4 bg-[#E6E6E6] flex-none lg:flex-1 rounded-md"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Job location"
                className="p-4 bg-[#E6E6E6] flex-none lg:flex-1 rounded-md"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-6">
              <input
                type="text"
                placeholder="Salary"
                className="p-4 bg-[#E6E6E6] flex-none lg:flex-1 rounded-md"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Experience needed"
                className="p-4 bg-[#E6E6E6] flex-none lg:flex-1 rounded-md"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-6">
              <input
                type="text"
                placeholder="No. of vacancies"
                className="p-4 bg-[#E6E6E6] flex-none lg:flex-1 rounded-md"
                name="vacancies"
                value={formData.vacancies}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Skills required"
                className="p-4 bg-[#E6E6E6] flex-none lg:flex-1 rounded-md"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              placeholder="Full job description"
              className="w-full h-60 bg-[#E6E6E6] text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 p-4"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
            <div className="space-x-4">
              <button
                type="submit"
                className="px-7 lg:px-10 py-3 text-sm lg:text-base font-semibold text-white border-2 border-[#6B54F5] bg-[#6B54F5] hover:bg-[#4e38cc] rounded-md"
              >
                Post
              </button>
              <div
              onClick={clear}
                className="inline-block px-7 lg:px-10 py-3 text-sm lg:text-base text-[#6B54F5] font-semibold border-2 border-[#6B54F5] rounded-md cursor-pointer"
              >
                Clear
              </div>
              <div
              onClick={()=>setShow((prev)=> !prev)}
                className="inline-block px-7 lg:px-10 py-3 text-sm lg:text-base text-[#6B54F5] font-semibold border-2 border-[#6B54F5] rounded-md cursor-pointer"
              >
                Cancel
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostJob;
