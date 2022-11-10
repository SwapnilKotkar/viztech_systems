import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
  title: {type: String},
  location: {type: String},
  salary: {type: String},
  experience: {type: String},
  vacancies: {type: String},
  posted_on: {type: String},
  skills:{type: String},
  description:{type: String},
});

const Jobs = mongoose.models.JOB || mongoose.model('JOB', jobSchema);

export default Jobs;