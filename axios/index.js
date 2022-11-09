import axios from 'axios'

const axiosURL = axios.create({baseURL: 'http://localhost:3000/api'})

// const url = 'http://localhost:3000/api'

// const url = 'https://viztech-systems.vercel.app/api'

export const fetchJobs = () => axiosURL.get('/jobs')
export const fetchJob = (id) => axiosURL.get(`/jobs/${id}`)
export const createJob = (newJob) => axiosURL.post('/jobs', newJob)
export const updateJob = (id, updatedJob) => axiosURL.put(`/jobs?jobId=${id}`, updatedJob)
export const deleteJob = (id) => axiosURL.delete(`/jobs?jobId=${id}`)

export const fetchResumes = () => axiosURL.get('/resume')
export const createResume = (resume) => axiosURL.post('/resume', resume)
export const deleteResume = (id) => axiosURL.delete(`/resume?resumeId=${id}`)

export const signUpAdmin = (adminData) => axiosURL.post('/signup', adminData)
export const signInAdmin = (adminData) => axiosURL.post('/signin', adminData)

// export default axiosAPI