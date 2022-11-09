const initialState = [];

import {
  FETCH_RESUMES,
  CREATE_RESUME,
  DELETE_RESUME,
} from "../actions/actionTypes";

const resumeReducer = (resumes = initialState, action) => {
  switch (action.type) {
    case FETCH_RESUMES:
      return action.payload;
    case CREATE_RESUME:
      return [...resumes, action.payload];
    case DELETE_RESUME:
      return resumes.filter((resume) => resume._id != action.payload);
    default:
      return resumes;
  }
};

export default resumeReducer;
