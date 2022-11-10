import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import S3 from "react-aws-s3";
import { useSelector, useDispatch } from "react-redux";
import { getJob } from "../../actions/jobs";
import { createResume } from "../../actions/Resumes";

const JobDetails = () => {
  const dispatch = useDispatch();
  const job = useSelector((state) => state.jobsReducer);

  const router = useRouter();
  const { job_details } = router.query;

  const [fileStatus, setFileStatus] = useState(false);

  const uniqueID = new Date().getTime();

  const [candidateData, setCandidateData] = useState({
    applyingFor: "",
    fullName: "",
    phone_number: "",
    emailID: "",
    notice_period: "",
    comments: "",
    resumeURL: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCandidateData({
      ...candidateData,
      [name]: value,
    });
  };

  const config = {
    bucketName: process.env.MY_AWS_BUCKET_NAME,
    region: process.env.MY_AWS_BUCKET_REGION,
    accessKeyId: process.env.MY_AWS_ACCESS_KEY_NAME,
    secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY_NAME,
  };

  const handleFileChange = async (event) => {
    toast.loading("Uploading file...");

    const file = event.target.files[0];
    const fileKey = uniqueID + "-" + file.name;

    try {
      const ReactS3Client = new S3(config);
      const fileUpload = await ReactS3Client.uploadFile(file, fileKey);
      setCandidateData({ ...candidateData, resumeURL: fileUpload.location });
      toast.remove();
      toast.success("File Uploaded");
      setFileStatus(true);
    } catch (error) {
      toast.remove();
      toast.error("File Upload failed");
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(createResume(candidateData));

    toast.success("resume submitted");

    setCandidateData({
      applyingFor: "",
      fullName: "",
      phone_number: "",
      emailID: "",
      notice_period: "",
      comments: "",
      resumeURL: "",
    });

    setTimeout(() => {
      router.push("/");
    }, 500);
  };

  useEffect(() => {
    dispatch(getJob(job_details));
  }, [dispatch, job_details]);

  return (
    <>
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="bg-banner py-5 lg:py-10 flex justify-center rounded-xl rounded-bl-[100px] rounded-tr-[100px]">
          <p className="text-white font-bold text-xl lg:text-4xl">
            Job Details
          </p>
        </div>

        {job.length > 0 ? (
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
          <div>
            <div className="bg-white p-4 my-4 space-y-6">
              <div>
                <h1 className="text-3xl font-bold">{job?.title}</h1>
              </div>
              <div>
                <div className="inline-grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="inline-flex justify-center items-center border-2 border-gray-900 rounded-[100px] py-2 px-3 text-sm">
                    Location: {job?.location}
                  </div>
                  <div className="inline-flex justify-center items-center border-2 border-gray-900 rounded-[100px] py-2 px-3 text-sm">
                    {job?.experience} years experience
                  </div>
                  <div className="inline-flex justify-center items-center border-2 border-gray-900 rounded-[100px] py-2 px-3 text-sm">
                    {job?.vacancies} vacancies
                  </div>
                  <div className="inline-flex justify-center items-center border-2 border-gray-900 rounded-[100px] py-2 px-3 text-sm">
                    Salary: {job?.salary}
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-xl">
                  <span className="font-semibold">Skills Needed:</span>{" "}
                  {job?.skills}
                </h1>
              </div>
              <div className="space-y-2">
                <h1 className="text-xl font-semibold">Full description:</h1>
                <h2>{job?.description}</h2>
              </div>
            </div>

            <div className="w-full flex justify-between items-center">
              <h1 className="text-color text-4xl px-3 font-bold">Apply Here</h1>
            </div>

            <div className="flex-none lg:flex-1 my-5 lg:my-0">
              <div className=" py-6 px-3 bg-white rounded-md">
                <form
                  className="space-y-8"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-6">
                    <input
                      type="text"
                      placeholder="Applying for"
                      className="p-4 bg-[#E6E6E6] flex-none lg:flex-1 rounded-md italic text-gray-700"
                      name="applyingFor"
                      value={candidateData.applyingFor}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Your full name*"
                      className="p-4 bg-[#E6E6E6] flex-none lg:flex-1 rounded-md"
                      name="fullName"
                      value={candidateData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-6">
                    <input
                      type="number"
                      placeholder="Phone number*"
                      className="p-4 bg-[#E6E6E6] flex-none lg:flex-1 rounded-md"
                      name="phone_number"
                      value={candidateData.phone_number}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="email"
                      placeholder="email id*"
                      className="p-4 bg-[#E6E6E6] flex-none lg:flex-1 rounded-md"
                      name="emailID"
                      value={candidateData.emailID}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-6">
                    <input
                      type="number"
                      placeholder="Notice period in days*"
                      className="p-4 bg-[#E6E6E6] flex-none lg:flex-1 rounded-md"
                      name="notice_period"
                      value={candidateData.notice_period}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Any comments"
                      className="p-4 bg-[#E6E6E6] flex-none lg:flex-1 rounded-md"
                      name="comments"
                      value={candidateData.comments}
                      onChange={handleChange}
                    />
                  </div>
                  {fileStatus && (
                    <div className="space-y-1 text-center bg-[#E6E6E6] rounded-md py-6">
                      <div className="flex text-sm justify-center text-gray-600">
                        <span className="relative rounded-md font-medium text-green-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                          <span className="text-green-500">
                            File uploaded succesfully
                          </span>
                        </span>
                      </div>
                    </div>
                  )}
                  {!fileStatus && (
                    <div className="space-y-1 text-center bg-[#E6E6E6] rounded-md py-6">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm justify-center text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a file</span>
                          <span className="text-red-500 font-bold">*</span>
                          <input
                            id="file-upload"
                            name="resume"
                            type="file"
                            className="sr-only"
                            accept="application/pdf"
                            onChange={handleFileChange}
                            required
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">
                        only pdf of max size 5MB
                      </p>
                    </div>
                  )}
                  <div>
                    <button className="px-7 lg:px-10 py-3 text-sm lg:text-base font-semibold text-white bg-[#6B54F5] hover:bg-[#4e38cc] rounded-md">
                      Apply
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default JobDetails;
