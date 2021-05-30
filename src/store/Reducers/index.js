import { combineReducers } from "redux";
import TestReducer from "./TestReducer";
import auth from "./AuthReducer";
import message from "./MsgReducer";

const reducers = combineReducers({
  Test: TestReducer,
  auth,
  message,
  //other reducers come here...
});

export default reducers;
