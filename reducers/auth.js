import { LOGGED_IN, LOGOUT } from "../actions/actionTypes";

const initialState = { authData: null };

const authReducer = (auth = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      return { ...auth, authData: action.payload };
    case LOGOUT:
      localStorage.removeItem("profile");
      return { ...auth, authData: null };
    default:
      return auth;
  }
};

export default authReducer;
