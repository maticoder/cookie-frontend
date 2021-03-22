import axios from "axios";
import {
  GET_ACHIEVEMENTS_SUCCESS,
  GET_ACHIEVEMENTS_FAILURE,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILURE,
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

export const getItemsSuccess = (items) => ({
  type: GET_ITEMS_SUCCESS,
  payload: items,
});

export const getItemsFailure = () => ({
  type: GET_ITEMS_FAILURE,
  payload: null,
});

export const getItems = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/cookie/items");
    dispatch(getItemsSuccess(data));
  } catch (error) {
    console.error(error);
    dispatch(getItemsFailure());
  }
};
