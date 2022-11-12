import axios from 'axios'

const url = process.env.WEBSITE_URL

export const fetchJobs = () => axios.get(`${url}/jobs`, { crossDomain: true })
export const fetchJob = (id) => axios.get(`${url}/jobs/${id}`, { crossDomain: true })
export const createJob = (newJob) => axios.post(`${url}/jobs`, newJob, { crossDomain: true })
export const updateJob = (id, updatedJob) => axios.put(`${url}/jobs?jobId=${id}`, updatedJob,{ crossDomain: true })
export const deleteJob = (id) => axios.delete(`${url}/jobs?jobId=${id}`, { crossDomain: true })

export const fetchResumes = () => axios.get(`${url}/resume`, { crossDomain: true })
export const createResume = (resume) => axios.post(`${url}/resume`, resume, { crossDomain: true })
export const deleteResume = (id) => axios.delete(`${url}/resume?resumeId=${id}`, { crossDomain: true })

export const signUpAdmin = (adminData) => axios.post(`${url}/signup`, adminData, { crossDomain: true })
export const signInAdmin = (adminData) => axios.post(`${url}/signin`, adminData, { crossDomain: true })