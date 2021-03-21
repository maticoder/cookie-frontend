import {
  GET_ACHIEVEMENTS_SUCCESS,
  GET_ACHIEVEMENTS_FAILURE,
} from "../types.js";

const initialState = {
  achievements: [],
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACHIEVEMENTS_SUCCESS:
      return {
        ...state,
        achievements: action.payload,
      };
    case GET_ACHIEVEMENTS_FAILURE:
      return state;
    default:
      return state;
  }
};

export default data;
