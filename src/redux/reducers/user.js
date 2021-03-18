import { LOGIN_USER, LOGOUT_USER } from "../types.js";

const initialState = {
  id: -1,
  name: null,
  authenticated: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        authenticated: true,
      };
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};

export default user;
