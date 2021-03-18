import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from "../types.js";

const initialState = {
  nextNotification: -1,
  notifications: [],
};

const notification = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      let key = state.nextNotification + 1;

      return {
        ...state,
        nextNotification: key,
        notifications: [
          { ...action.payload, key: key },
          ...state.notifications,
        ],
      };
    case REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.key !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default notification;
