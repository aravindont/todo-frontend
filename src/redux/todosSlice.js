import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { setTodos } = todosSlice.actions;
export default todosSlice.reducer;
