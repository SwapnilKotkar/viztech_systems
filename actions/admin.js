import * as axiosAPI from "../axios";

import { LOGGED_IN, LOGOUT } from "./actionTypes";


export const loginAdmin = (loginData) => async (dispatch) => {
  try {
    const { data } = await axiosAPI.signInAdmin(loginData);

    dispatch({ type: LOGGED_IN, payload: data });
  } catch (error) {
    console.log("login error:", error);
  }
};

export const logoutAdmin = () => {
  return {
    type: LOGOUT,
  };
};
