import {
  GET_ACHIEVEMENTS_SUCCESS,
  GET_ACHIEVEMENTS_FAILURE,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILURE,
} from "../types.js";

const initialState = {
  achievements: [],
  items: [],
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACHIEVEMENTS_SUCCESS:
      return {
        ...state,
        achievements: action.payload,
      };
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload,
      };
    case GET_ITEMS_FAILURE:
      return state;
    case GET_ACHIEVEMENTS_FAILURE:
      return state;
    default:
      return state;
  }
};

export default data;
