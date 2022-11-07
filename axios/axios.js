import axios from 'axios'

const axiosAPI = axios.create({baseURl: 'https://localhost:3000/'})

export default axiosAPI