import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import todosReducer from "./todosSlice";

const rootReducer = combineReducers({
  user: userReducer,
  todos: todosReducer,
});

export default rootReducer;
