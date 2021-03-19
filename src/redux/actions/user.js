import { LOGIN_USER, LOGOUT_USER } from "../types.js";
import { addNotification } from "./notification.js";
import { SUCCESS } from "../../constants/snackbars.js";
import { showLoader, hideLoader } from "./ui.js";
import { parseJWT } from "../../utils/token.js";

export const loginUser = (token) => (dispatch) => {
  localStorage.setItem("token", token);
  dispatch(showLoader());

  const user = parseJWT(token);

  dispatch({
    type: LOGIN_USER,
    payload: {
      id: user.id,
      name: user.name,
    },
  });

  // fetch user data

  setTimeout(() => {
    dispatch(hideLoader());
  }, 3000);
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");

  dispatch({
    type: LOGOUT_USER,
    payload: null,
  });

  dispatch(
    addNotification({
      type: SUCCESS,
      message: "Logout successfull",
    })
  );
};
