import { combineReducers } from "redux";
import CounterReducer from "./counterReducer";
import NavigationReducer from "./navigationReducer";

const AppReducer = combineReducers({
  CounterReducer,
  NavigationReducer
});

export default AppReducer;
