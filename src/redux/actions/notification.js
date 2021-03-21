import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from "../types.js";
import { SUCCESS, ERROR, WARNING, INFO } from "../../constants/snackbars.js";

export const addNotification = (notification) => ({
  type: ADD_NOTIFICATION,
  payload: notification,
});

export const removeNotification = (key) => ({
  type: REMOVE_NOTIFICATION,
  payload: key,
});

export const addSuccessNotification = (message) => ({
  type: ADD_NOTIFICATION,
  payload: {
    type: SUCCESS,
    message,
  },
});

export const addErrorNotification = (message) => ({
  type: ADD_NOTIFICATION,
  payload: {
    type: ERROR,
    message,
  },
});

export const addWarningNotification = (message) => ({
  type: ADD_NOTIFICATION,
  payload: {
    type: WARNING,
    message,
  },
});

export const addInfoNotification = (message) => ({
  type: ADD_NOTIFICATION,
  payload: {
    type: INFO,
    message,
  },
});
