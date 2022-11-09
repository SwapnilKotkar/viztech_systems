import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import Jobs from "../models/jobSchema";
import Resumes from "../models/resumeSchema";
import Admin from '../models/adminSchema'

//  Controllers //

export const signinAdmin = async (req, res) => {
  const {email, password} = req.body;

  try {
    const user = await Admin.findOne({ email: email })

    if(!user) return res.status(404).json({message: "User doesn't exist."})

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if(!isPasswordCorrect) return res.status(400).json({message: "Invalid Credentials."})

    const token = jwt.sign({email: user.email, id: user._id}, process.env.JWT_SECRET_KEY, { expiresIn: "10d" })

    res.status(200).json({ result: user, token })
 
    } catch (error) {
        res.status(500).json({ message: 'something went wrong' })
        console.log(error)
    }
}

export const signupAdmin = async (req, res) => {
  const { email, password } = req.body;

  console.log("email", email)
  console.log("password", password)


  try {
    const user = await Admin.findOne({ email: email });

    if (user) return res.status(400).json({ message: "User already exist." });

    const hashedPassword = await bcrypt.hash(password, 12)

    const newUser = await Admin.create({ email: email, password: hashedPassword });

    const token = jwt.sign({email: newUser.email, id: newUser._id}, process.env.JWT_SECRET_KEY, { expiresIn: "10d" })

    res.status(200).json({ result: newUser, token })

  } catch (error) {
    res.status(500).json({ message: 'something went wrong' })
    console.log(error)
  }
};

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
