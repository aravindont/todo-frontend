import { createSlice } from "@reduxjs/toolkit";
const userState = JSON.parse(localStorage.getItem("userState")) || {
  userId: null,
  username: null,
};
const userSlice = createSlice({
  name: "user",
  initialState: userState,

  reducers: {
    setUser: (state, action) => {
      state.userId = action.payload.userId;
      state.username = action.payload.username;
      // save the state to local localStorage
      localStorage.setItem("userState", JSON.stringify(state));
    },
    logoutUser: (state) => {
      state.userId = null;
      state.username = null;
      // remove the state from localStorage
      localStorage.removeItem("userState");
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
