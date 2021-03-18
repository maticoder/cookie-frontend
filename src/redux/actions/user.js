import { LOGIN_USER, LOGOUT_USER } from "../types.js";

export const loginUser = (token) => (dispatch) => {
  localStorage.setItem("token", token);

  dispatch({
    type: LOGIN_USER,
    payload: {
      id: 1,
      name: "john",
    },
  });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");

  dispatch({
    type: LOGOUT_USER,
    payload: null,
  });
};
