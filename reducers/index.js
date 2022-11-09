import { combineReducers } from "redux";

import jobsReducer from "./jobs";
import resumeReducer from "./resumes";

const rootReducer = combineReducers({ jobsReducer, resumeReducer });

export default rootReducer
