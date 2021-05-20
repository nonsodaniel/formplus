import { combineReducers } from "redux";
import templateReducers from "../reducers/templateReducers";

export default combineReducers({
  templates: templateReducers,
});
