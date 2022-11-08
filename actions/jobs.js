import * as axiosAPI from "../axios";

//Action Creators

export const getJobs = () => async (dispatch) => {
  try {
    const { data } = await axiosAPI.fetchJobs();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log("FETCH_ALL error:", error);
  }
};

export const getJob = (id) => async (dispatch) => {
  try {
    const { data } = await axiosAPI.fetchJob(id);

    dispatch({ type: "FETCH_JOB", payload: data });
  } catch (error) {
    console.log("FETCH_JOB error:", error);
  }
};

export const createJob = (job) => async (dispatch) => {
  try {
    const { data } = await axiosAPI.createJob(job);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log("CREATE error:", error);
  }
};

export const updateJob = (id, job) => async (dispatch) => {
  try {
    const { data } = await axiosAPI.updateJob(id, job);

    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log("UPDATE error:", error);
  }
};

export const deleteJob = (id) => async (dispatch) => {
  try {
    await axiosAPI.deleteJob(id);

    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log("DELETE error:", error);
  }
};
