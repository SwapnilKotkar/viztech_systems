const initialState = [];

const jobsReducer = (jobs = initialState, action) => {
  switch (action.type) {
    case 'FETCH_JOB':
        return action.payload;
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...jobs, action.payload];
    case "UPDATE":
      return jobs.map((job)=> job._id == action.payload._id ? action.payload : job)
    case 'DELETE':
        return jobs.filter((job)=> job._id != action.payload)
    default:
      return jobs;
  }
};

export default jobsReducer;
