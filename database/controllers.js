import Jobs from "../models/jobSchema";
import Resumes from "../models/resumeSchema";

//  Controllers //

export const getJobs = async (req, res) => {
  try {
    const jobs = await Jobs.find({});

    if (!jobs) return res.status(404).json({ error: "Data not found" });

    res.status(200).json(jobs);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching jobs" });
    console.log(error);
  }
};

export const getJob = async (req, res) => {
  try {
    const { jobId } = req.query;

    if (jobId) {
      const job = await Jobs.findById(jobId);
      return res.status(200).json(job);
    }
    res.status(404).json({ error: "Job ID not provided" });
  } catch (error) {
    res.status(404).json({ error: "Error while fetching job" });
    console.log(error);
  }
};

export const postJobs = async (req, res) => {
  try {
    const jobData = req.body;

    Jobs.create(jobData, function (err, data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    res.status(404).json({ error: "Error while posting job" });
    console.log(error);
  }
};

export const putJob = async (req, res) => {
  try {
    const { jobId } = req.query;
    const jobData = req.body;

    if (jobId && jobData) {
      const job = await Jobs.findByIdAndUpdate(jobId, jobData, { new: true });
      return res.status(200).json(job);
    }
    res
      .status(404)
      .json({ error: "Job ID or Job data not provided for updating..." });
  } catch (error) {
    res.status(404).json({ error: "Error while updating job" });
    console.log(error);
  }
};

export const deleteJob = async (req, res) => {
  try {
    const { jobId } = req.query;

    if (jobId) {
      const job = await Jobs.findByIdAndDelete(jobId);
      return res.status(200).json(job);
    }
    res.status(404).json({ error: "Job Id not provided for deleting..." });
  } catch (error) {
    res.status(404).json({ error: "Error while deleting job" });
    console.log(error);
  }
};

export const getResumes = async (req, res) => {
  try {
    const resumes = await Resumes.find({});

    if (!resumes) return res.status(404).json({ error: "Data not found" });

    res.status(200).json(resumes);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching resumes" });
    console.log(error);
  }
};

export const createResume = async (req, res) => {
  try {
    const resumeData = req.body;

    console.log("resume", resumeData)

    Resumes.create(resumeData, function (err, data) {
      return res.status(200).json(data);
    });
    
  } catch (error) {
    res.status(404).json({ error: "Error while submitting resume" });
    console.log(error);
  }
}

export const deleteResume = async (req, res) => {
  try {
    const { resumeId } = req.query;

    if (resumeId) {
      const resume = await Resumes.findByIdAndDelete(resumeId);
      return res.status(200).json(resume);
    }
    res.status(404).json({ error: "Resume Id not provided for deleting..." });
  } catch (error) {
    res.status(404).json({ error: "Error while deleting resume" });
    console.log(error);
  }
};
