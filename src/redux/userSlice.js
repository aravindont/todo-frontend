import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userId: null,
    username: null,
  },

  reducers: {
    setUser: (state, action) => {
      state.userId = action.payload.userId;
      state.username = action.payload.username;
    },
    logoutUser: (state) => {
      state.userId = null;
      state.username = null;
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
