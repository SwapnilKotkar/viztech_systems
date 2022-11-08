import axios from 'axios'

// const axiosAPI = axios.create({baseURl: 'https://localhost:3000/'})

const url = 'https://viztech-systems.vercel.app/api'

export const fetchJobs = () => axios.get(`${url}/jobs`)
export const fetchJob = (id) => axios.get(`${url}/jobs/${id}`)
export const createJob = (newJob) => axios.post(`${url}/jobs`, newJob)
export const updateJob = (id, updatedJob) => axios.put(`${url}/jobs?jobId=${id}`, updatedJob)
export const deleteJob = (id) => axios.delete(`${url}/jobs?jobId=${id}`)

export const fetchResumes = () => axios.get(`${url}/resume`)
export const createResume = (resume) => axios.post(`${url}/resume`, resume)
export const deleteResume = (id) => axios.delete(`${url}/resume?resumeId=${id}`)



// export default axiosAPI