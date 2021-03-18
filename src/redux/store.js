import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import notification from "./reducers/notification.js";

const reducers = combineReducers({
  notification,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
