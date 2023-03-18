import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      return action.payload;
    },
    updateTodoTitle: (state, action) => {
      const index = state.findIndex((todo) => todo._id === action.payload.id);
      if (index !== -1) {
        state[index].title = action.payload.newTitle;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo._id !== action.payload);
    },
  },
});
export const { setTodos, updateTodoTitle, deleteTodo } = todosSlice.actions;

export const fetchTodos = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/todo/${id}`);
    const todos = response.data;
    dispatch(setTodos(todos));
  } catch (error) {
    console.log(error);
  }
};

export const searchTodos = (userId, query) => async (dispatch) => {
  try {
    const response = await axios.get("/api/search", {
      params: { userId, query },
    });
    const searchTodos = response.data;
    dispatch(setTodos(searchTodos));
  } catch (error) {
    console.log(error);
  }
};

export const saveTodoTitle = (id, newTitle) => async (dispatch) => {
  try {
    await axios.put("/api/todo", {
      id,
      newTitle,
    });
    dispatch(updateTodoTitle({ id, newTitle }));
  } catch (error) {
    console.log(error);
  }
};

export const removeTodo = (id) => async (dispatch) => {
  try {
    await axios.delete("/api/todo", { data: { id } });
    dispatch(deleteTodo(id));
  } catch (err) {}
};
export default todosSlice.reducer;
