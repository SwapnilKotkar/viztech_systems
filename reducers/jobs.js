const initialState = [];

import {FETCH_ALL_JOBS, FETCH_JOB, CREATE_JOB, UPDATE_JOB, DELETE_JOB} from '../actions/actionTypes'

const jobsReducer = (jobs = initialState, action) => {
  switch (action.type) {
    case FETCH_JOB:
        return action.payload;
    case FETCH_ALL_JOBS:
      return action.payload;
    case CREATE_JOB:
      return [...jobs, action.payload];
    case UPDATE_JOB:
      return jobs.map((job)=> job._id == action.payload._id ? action.payload : job)
    case DELETE_JOB:
        return jobs.filter((job)=> job._id != action.payload)
    default:
      return jobs;
  }
};

export default jobsReducer;
