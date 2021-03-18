import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import user from "./reducers/user.js";
import notification from "./reducers/notification.js";

const reducers = combineReducers({
  user,
  notification,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
