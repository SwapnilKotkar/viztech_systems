import mongoose from "mongoose";

const approvedResumeSchema = mongoose.Schema({
    title: String,
    fullName: String,
    phone_number: String,
    emailID: String,
    notice_period: String,
    comments: String,
    resumeURL: String,
});

const ApprovedResumes = mongoose.models.resume || mongoose.model('resume', approvedResumeSchema);

export default ApprovedResumes