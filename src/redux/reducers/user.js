import {
  LOGIN_USER,
  LOGOUT_USER,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_FAILURE,
  SAVE_USER_DATA_SUCCESS,
  SAVE_USER_DATA_FAILURE,
  UPDATE_USER_PROGRESS,
} from "../types.js";

const initialState = {
  id: -1,
  name: null,
  authenticated: false,
  counter: 0,
  achievements: [],
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
    case GET_USER_DATA_SUCCESS:
      return {
        ...state,
        counter: action.payload.counter,
        achievements: action.payload.achievements,
        item: action.payload.item,
      };
    case SAVE_USER_DATA_SUCCESS:
      return {
        ...state,
        counter: action.payload.counter,
        achievements: action.payload.achievements,
        item: action.payload.item,
      };
    case UPDATE_USER_PROGRESS:
      return {
        ...state,
        counter: action.payload,
      };
    case GET_USER_DATA_FAILURE:
      return state;
    case SAVE_USER_DATA_FAILURE:
      return state;
    default:
      return state;
  }
};

export default user;
