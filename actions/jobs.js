import * as axiosAPI from "../axios";

import {
  FETCH_ALL_JOBS,
  FETCH_JOB,
  CREATE_JOB,
  UPDATE_JOB,
  DELETE_JOB,
} from "./actionTypes";

//Action Creators

export const getJobs = () => async (dispatch) => {
  try {
    const { data } = await axiosAPI.fetchJobs();

    dispatch({ type: FETCH_ALL_JOBS, payload: data });
  } catch (error) {
    console.log("FETCH_ALL_JOBS error:", error);
  }
};

export const getJob = (id) => async (dispatch) => {
  try {
    const { data } = await axiosAPI.fetchJob(id);

    dispatch({ type: FETCH_JOB, payload: data });
  } catch (error) {
    console.log("FETCH_JOB error:", error);
  }
};

export const createJob = (job) => async (dispatch) => {
  try {
    const { data } = await axiosAPI.createJob(job);

    dispatch({ type: CREATE_JOB, payload: data });
  } catch (error) {
    console.log("CREATE_JOB error:", error);
  }
};

export const updateJob = (id, job) => async (dispatch) => {
  try {
    const { data } = await axiosAPI.updateJob(id, job);

    dispatch({ type: UPDATE_JOB, payload: data });
  } catch (error) {
    console.log("UPDATE_JOB error:", error);
  }
};

export const deleteJob = (id) => async (dispatch) => {
  try {
    await axiosAPI.deleteJob(id);

    dispatch({ type: DELETE_JOB, payload: id });
  } catch (error) {
    console.log("DELETE_JOB error:", error);
  }
};
