import { combineReducers } from "redux";

import jobsReducer from "./jobs";
import resumeReducer from "./resumes";
import authReducer from "./auth";

const rootReducer = combineReducers({ jobsReducer, resumeReducer, authReducer });

export default rootReducer
