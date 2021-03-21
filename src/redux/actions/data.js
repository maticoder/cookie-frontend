import axios from "axios";
import {
  GET_ACHIEVEMENTS_SUCCESS,
  GET_ACHIEVEMENTS_FAILURE,
} from "../types.js";

export const getAchievementsSuccess = (achievements) => ({
  type: GET_ACHIEVEMENTS_SUCCESS,
  payload: achievements,
});

export const getAchievementsFailure = () => ({
  type: GET_ACHIEVEMENTS_FAILURE,
  payload: null,
});

export const getAchievements = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/cookie/achievements");
    dispatch(getAchievementsSuccess(data));
  } catch (error) {
    console.error(error);
    dispatch(getAchievementsFailure());
  }
};
