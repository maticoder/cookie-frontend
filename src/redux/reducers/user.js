import { LOGIN_USER, LOGOUT_USER } from "../types";

const initialState = {
  auth: false,
  id: null,
  name: "",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        auth: true,
        id: action.payload.id,
        name: action.payload.name,
      };
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};

export default user;
