import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer/authReducer";
import appStateReducer from "./reducers/appStateReducer/index";
import bagReducer from "./reducers/bagReducer/index";

export const rootReducer = combineReducers({
  auth: authReducer,
  appState: appStateReducer,
  bag: bagReducer,
});
