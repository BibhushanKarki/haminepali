import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "./Reducers";

const middleware = [thunk];
//thunk middleware is used to intercept actions so as to make API call before dispatching result to reducer
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
