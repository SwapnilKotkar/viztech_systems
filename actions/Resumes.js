import * as axiosAPI from "../axios";

export const getResumes = () => async (dispatch) => {
  try {
    const { data } = await axiosAPI.fetchResumes();

    dispatch({ type: "FETCH_RESUMES", payload: data });
  } catch (error) {
    console.log("FETCH_RESUMES error:", error);
  }
};

export const createResume = (resume) => async (dispatch) => {
  console.log("res1", resume);
  try {
    const { data } = await axiosAPI.createResume(resume);

    console.log("data", data);

    dispatch({ type: "CREATE_RESUME", payload: data });
  } catch (error) {
    console.log("CREATE_RESUME error:", error);
  }
};

export const deleteResume = (id) => async (dispatch) => {
  try {
    await axiosAPI.deleteResume(id);

    dispatch({ type: "DELETE_RESUME", payload: id });
  } catch (error) {
    console.log("DELETE_RESUME error:", error);
  }
};