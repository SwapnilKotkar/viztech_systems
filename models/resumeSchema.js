import mongoose from "mongoose";

const resumeSchema = mongoose.Schema({
    applyingFor: String,
    fullName: String,
    phone_number: String,
    emailID: String,
    notice_period: String,
    comments: String,
    resumeURL: String,
});

const Resumes = mongoose.models.resume || mongoose.model('resume', resumeSchema);

export default Resumes