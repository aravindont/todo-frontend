import { combinedReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import todosReducer from "./todosSlice";

const rootReducer = combinedReducers({
  user: userReducer,
  todos: todosReducer,
});

export default rootReducer;
