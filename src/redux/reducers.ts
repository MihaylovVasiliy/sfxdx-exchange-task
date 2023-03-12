import { combineReducers } from "redux";
import user from "./user/reducers";

// eslint-disable-next-line
export default () =>
  combineReducers({
    user,
  });
