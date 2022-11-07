import db from "../../database/mongodb";
import resume from "../../models/resumeSchema";

const postJob = async (req, res) => {
  const {
    title,
    fullName,
    phone_number,
    emailID,
    notice_period,
    comments,
    resumeURL,
  } = req.body;

  try {
    db();

    const newJob = await resume.create({
      title,
      fullName,
      phone_number,
      emailID,
      notice_period,
      comments,
      resumeURL,
    });

    res.status(200).json({ message: "Resume Submitted" });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
    console.log(error);
  }
};

export default postJob;
