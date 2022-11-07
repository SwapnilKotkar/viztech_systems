import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const JobId = () => {
  const router = useRouter();
  const { jobId } = router.query;

  const [formData, setFormData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    toast.loading("Updating job...");

    const res = await fetch(`/api/jobs/?jobId=${jobId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.status === 200) {
      toast.remove();
      toast.success("Job Updated");
      setTimeout(() => {
        router.push("/admin");
      }, 500);
    } else {
      toast.remove();
      toast.error("Failed to update");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/jobs/${jobId}`);
      const JobDetails = await result.json();
      setFormData(JobDetails);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl px-4 my-5 md:px-8 mx-auto">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-color text-4xl font-bold">Edit a job</h1>
        </div>

        <div className="flex-none lg:flex-1 my-5 lg:my-0">
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
                className="w-full h-80 bg-[#E6E6E6] text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 p-4"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
              <div>
                <button className="px-7 lg:px-10 py-3 text-sm lg:text-base font-semibold text-white bg-[#6B54F5] hover:bg-[#4e38cc] rounded-md">
                  Edit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobId;
