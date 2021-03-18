import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from "../types.js";

export const addNotification = (notification) => ({
  type: ADD_NOTIFICATION,
  payload: notification,
});

export const removeNotification = (key) => ({
  type: REMOVE_NOTIFICATION,
  payload: key,
});
